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
}
