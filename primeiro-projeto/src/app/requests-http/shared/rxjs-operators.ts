import { HttpEvent, HttpEventType, HttpResponse } from "@angular/common/http";
import { filter, pipe, map, tap } from "rxjs";

export function filterResponse<T>() {
  return pipe(
    filter((event: HttpEvent<T>) => event.type === HttpEventType.Response),
    map((response: HttpResponse<T>) => response.body)
  );
}

export function uploadProgress<T>(cb: (progress: number) => void) {
  return tap((event: HttpEvent<T>) => {
    if (event.type === HttpEventType.UploadProgress) {
      cb(Math.round((event.loaded * 100) / (isNaN(event.total!) ? 1 : event.total!)));
    }
  });
}
