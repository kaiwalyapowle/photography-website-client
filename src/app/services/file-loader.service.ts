import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileLoaderService {

  constructor(private http: HttpClient) { }

  pushFileToStorage(file: File, paneName: string): Observable<HttpEvent<{}>> {

    let formData: FormData = new FormData();

    formData.append('paneName', paneName);
    formData.append('file', file);

    const request = new HttpRequest('POST', 'http://localhost:8081/uploadFile', formData, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(request);
  }

  pushFileTreeToStorage(file: File, paneName: string, galleryName: string): Observable<HttpEvent<{}>> {
    let formData: FormData = new FormData();

    formData.append('paneName', paneName);
    formData.append('galleryName', galleryName)
    formData.append('file', file);

    const request = new HttpRequest('POST', 'http://localhost:8081/uploadFileTree', formData, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(request);
  }

  getFiles(panelName): Observable<any> {
    let params = new HttpParams().set('panelName', panelName);
    return this.http.get('http://localhost:8081/getAllFiles', { params: params });
  }

  getFilesTree(panelName, galleryName): Observable<any> {
    let params = new HttpParams().set('panelName', panelName).set('galleryName', galleryName);
    return this.http.get('http://localhost:8081/getAllGalleryFiles', { params: params });
  }


}
