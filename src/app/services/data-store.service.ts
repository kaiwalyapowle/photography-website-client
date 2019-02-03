import { Injectable } from "@angular/core";
import { catalogue } from "../components/folder-structure/folder-structure.component";

@Injectable({
  providedIn: "root"
})
export class DataStoreService {
  catalogues = catalogue;
  catalogueContentsObj;
  catalogueContentObj;
  constructor() {}

  private files = new Map();
  // private galleryFilesMap = new Map();

  setFiles(subcategory, files) {
    this.files.set(subcategory, files);
  }

  getFiles(subcategory) {
    return this.files.get(subcategory);
  }

  getGalleryNames(panelName: string): string[] {
    for (let catalogueObj of this.catalogues) {
      this.catalogueContentsObj = catalogueObj["contents"];
      for (let content of this.catalogueContentsObj) {
        this.catalogueContentObj = content["content"];
        for (let content of this.catalogueContentObj) {
          if (content.panelName == panelName) {
            return content.galleryName;
          }
        }
      }
    }
    return null;
  }

  // setGalleryFilesMap(galleryName: string, galleryFiles: string[]) {
  //   this.galleryFilesMap.set(galleryName, galleryFiles);
  // }

  // getGalleryFilesMap(galleryName: string): string[] {
  //   return this.galleryFilesMap.get(galleryName);
  // }
}
