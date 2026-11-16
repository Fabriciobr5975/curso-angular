import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { filterResponse, uploadProgress } from '../shared/rxjs-operators';
import { UploadFileService } from './upload-file.service';

@Component({
  selector: 'app-upload-file',
  standalone: false,
  templateUrl: './upload-file.component.html',
  styleUrl: './upload-file.component.scss',
})
export class UploadFileComponent {

  protected files!: Set<File>;
  private service: UploadFileService = inject(UploadFileService);
  protected progress = 0;

  private cdr = inject(ChangeDetectorRef);

  onChange(event: Event) {
    console.log(event);
    const selectedFiles = (event.target as HTMLInputElement).files ?? new FileList();
    // document.getElementById("formFileLabel")!.innerHTML = selectedFiles[0]?.name;

    const fileNames: string[] = [];
    this.files = new Set<File>()

    for (const selectedFile of selectedFiles) {
      fileNames.push(selectedFile.name);
      this.files.add(selectedFile);
    }

    document.getElementById("formFileLabel")!.innerHTML = fileNames.join(", ");
    this.progress = 0;
  }

  onUpload() {
    if (this.files && this.files.size > 0) {
      this.service.upload(this.files, environment.BASE_URL + "/upload")
        .pipe(
          uploadProgress(progress => {
            console.log(progress)
            this.progress = progress;
            this.cdr.detectChanges();
          }),
          filterResponse(),
        )
        .subscribe({
          next: () => {
            console.log("Upload concluído");
          },
        })
      // .subscribe({
      //   next: (event: HttpEvent<object>) => {
      //     // console.log(event);
      //     if (event.type === HttpEventType.Response) {
      //       console.log("Upload concluído");
      //       this.files.clear();
      //     } else if (event.type === HttpEventType.UploadProgress) {
      //       const percentDone = Math.round((event.loaded * 100) / event.total!);
      //       // console.log("Progresso", percentDone);
      //       this.progress = percentDone;
      //       this.cdr.detectChanges();
      //     }
      //   },
      // });
    }
  }

  onDowloadExcel() {
    this.service.download(environment.BASE_URL + "/downloadExcel")
      .subscribe({
        next: (resp: Blob) => this.service.handleFile(resp, "report.xlsx"),
      });
  }

  onDowloadPDF() {
    this.service.download(environment.BASE_URL + "/downloadPDF")
      .subscribe({
        next: (resp: Blob) => this.service.handleFile(resp, "report.pdf"),
      });
  }
}
