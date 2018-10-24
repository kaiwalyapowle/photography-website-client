import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DataStoreService } from "../../services/data-store.service";
import { FileLoaderService } from "../../services/file-loader.service";
import { MatDialog } from "@angular/material/dialog";

import {
  Image,
  PlainGalleryConfig,
  PlainGalleryStrategy,
  GridLayout,
  LineLayout
} from "@ks89/angular-modal-gallery";

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.scss"]
})
export class GalleryComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private dataStoreService: DataStoreService,
    private fileLoaderService: FileLoaderService,
    public dialog: MatDialog
  ) {}

  galleryNames: string[];
  panelName: string;
  all_image_objects: Object[] = [];
  flexible_only_images: string[] = [];
  // plainGalleryGrid: PlainGalleryConfig = {
  //   strategy: PlainGalleryStrategy.GRID,
  //   layout: new GridLayout(
  //     { width: "35%", height: "100%" },
  //     { length: 1, wrap: true }
  //   )
  // };

  plainGalleryRow: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.ROW,
    layout: new LineLayout(
      { width: "100%", height: "100%" },
      { length: -1, wrap: true },
      "flex-start"
    )
  };

  ngOnInit() {
    this.route.paramMap.subscribe(paramsObj => {
      this.panelName = paramsObj["params"]["panel"];
      this.galleryNames = this.dataStoreService.getFiles(this.panelName);
    });

    for (let galleryName of this.galleryNames) {
      if (!galleryName.includes("_Thumbnail")) {
        this.fileLoaderService
          .getFilesTree(this.panelName, galleryName)
          .subscribe(fileArray => {
            // let images: Image[] = [];

            for (let i = 0; i < fileArray.length; i++) {
              this.flexible_only_images.push(fileArray[i]);
              // images.push(
              //   new Image(i, {
              //     // modal
              //     img: fileArray[i],
              //     description: "Description 2",
              //     title: galleryName,
              //     alt: "custom alt 2"
              //   })
              // );
              this.all_image_objects.push({
                id: i,
                img: fileArray[i],
                galleryName: galleryName
              });
            }
            this.dataStoreService.setFiles(galleryName, fileArray);
          });
      }
    }
  }

  chosenGallery(galleryName: string) {
    this.flexible_only_images = [];

    for (let imageObj of this.all_image_objects) {
      if (imageObj["galleryName"] == galleryName) {
        this.flexible_only_images.push(imageObj["img"]);
      } else if (galleryName == "All") {
        this.flexible_only_images.push(imageObj["img"]);
      }
    }

    console.log(this.flexible_only_images);
  }
}
