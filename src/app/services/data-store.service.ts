import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  constructor() { }

  private _files = new Map();
  private galleryFilesMap = new Map();

  setFiles(subcategory, files) {
    this._files.set(subcategory, files);
  }

  getFiles(subcategory) {
    return this._files.get(subcategory);
  }

  setGalleryFilesMap(galleryName: string, galleryFiles: string[]) {
    this.galleryFilesMap.set(galleryName, galleryFiles);
  }

  getGalleryFilesMap(galleryName: string): string[] {
    return this.galleryFilesMap.get(galleryName);
  }

}
