import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UploadFileService {
  private http: HttpClient = inject(HttpClient);

  upload(files: Set<File>, url: string) {
    const formData = new FormData();
    files.forEach(file => formData.append("file", file, file.name));
    // const request = new HttpRequest("POST", url, formData);
    // return this.http.request(request);
    return this.http.post(url, formData, {
      observe: "events",
      reportProgress: true,
    });
  }

  download(url: string) {
    return this.http.get<Blob>(url, { responseType: "blob" as "json" });
  }

  handleFile(resp: Blob, fileName: string) {
    const file = new Blob([resp], {
      type: resp.type
    });

    // IE
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(file);
      return;
    }

    const blob = window.URL.createObjectURL(file);
    const link = document.createElement('a');

    link.href = blob;
    link.download = fileName;
    // link.click();

    link.dispatchEvent(new MouseEvent('click',
      {
        bubbles: true,
        cancelable: true,
        view: window
      }));

    setTimeout(() => {
      window.URL.revokeObjectURL(blob);
      link.remove();
    }, 100);
  }
}
