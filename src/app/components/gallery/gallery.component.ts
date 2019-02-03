import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DataStoreService } from "../../services/data-store.service";
import { FileLoaderService } from "../../services/file-loader.service";
import { MatDialog } from "@angular/material/dialog";

import { Masonry, MasonryGridItem } from "ng-masonry-grid";
import { GalleryModalComponent } from "../gallery-modal/gallery-modal.component";

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.scss"]
})
export class GalleryComponent implements OnInit {
  catalogueContents = [];
  constructor(
    private route: ActivatedRoute,
    private dataStoreService: DataStoreService,
    private fileLoaderService: FileLoaderService,
    public dialog: MatDialog
  ) {}

  _masonry: Masonry;
  // Either gallery names will get stored or gallery images.
  galleryNamesOrImages_isTree: string[];
  panelName: string;
  all_image_objects: Object[] = [];
  flexible_only_images: string[] = [];
  isTree: string = "true";

  ngOnInit() {
    this.route.paramMap.subscribe(paramsObj => {
      this.panelName = paramsObj["params"]["panel"];
      this.galleryNamesOrImages_isTree = this.dataStoreService.getFiles(
        this.panelName
      );

      if (!this.galleryNamesOrImages_isTree) {
        this.galleryNamesOrImages_isTree = this.dataStoreService.getGalleryNames(
          this.panelName
        );
      }
    });

    this.route.queryParams.subscribe(paramsObj => {
      this.isTree = paramsObj["isTree"];
      if (this.isTree == "true") {
        for (let galleryName of this.galleryNamesOrImages_isTree) {
          if (!galleryName.includes("_Thumbnail")) {
            this.fileLoaderService
              .getFilesTree(this.panelName, galleryName)
              .subscribe(fileArray => {
                for (let i = 0; i < fileArray.length; i++) {
                  this.flexible_only_images.push(fileArray[i]);

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
      } else {
        for (let galleryImage of this.galleryNamesOrImages_isTree) {
          this.addItems(galleryImage);
        }
      }
    });
  }

  // Get ng masonry grid instance first
  onNgMasonryInit($event: Masonry) {
    this._masonry = $event;
  }

  chosenGallery(galleryName: string) {
    this.removeAllItems();

    for (let imageObj of this.all_image_objects) {
      if (imageObj["galleryName"] == galleryName) {
        this.addItems(imageObj["img"]);
      } else if (galleryName == "All") {
        this.addItems(imageObj["img"]);
      }
    }
  }

  addItems(img: string) {
    // time out is given because removeAllItems promise takes long to get executed. Hence items get added before getting removed
    setTimeout(() => {
      if (this._masonry) {
        this._masonry.setAddStatus("add"); // set status to 'add'
        this.flexible_only_images.push(img);
      }
    }, 1000);
  }

  // Append items to NgMasonryGrid
  appendItems(img: string) {
    if (this._masonry) {
      // Check if Masonry instance exists
      this._masonry.setAddStatus("append"); // set status to 'append'
      this.flexible_only_images.push(img); // some grid items: items
    }
  }

  // Remove all items from NgMasonryGrid
  removeAllItems() {
    if (this._masonry) {
      this._masonry.removeAllItems().subscribe((items: MasonryGridItem) => {
        // remove all items from the list
        this.flexible_only_images = [];
      });
    }
  }

  openDialog(imageArray: string[], index: number): void {
    const dialogRef = this.dialog.open(GalleryModalComponent, {
      height: "600px",
      hasBackdrop: true,
      maxWidth: "fit-content",
      data: { title: "", imageArray: imageArray, selectedImageIndex: index },
      backdropClass: "dialog-backdrop"
    });

    dialogRef.afterClosed().subscribe(result => {});
  }
}

// ======================ks-modal-gallery unused code=========================//
// plainGalleryGrid: PlainGalleryConfig = {
//   strategy: PlainGalleryStrategy.GRID,
//   layout: new GridLayout(
//     { width: "35%", height: "100%" },
//     { length: 1, wrap: true }
//   )
// };

// plainGalleryRow: PlainGalleryConfig = {
//   strategy: PlainGalleryStrategy.ROW,
//   layout: new LineLayout(
//     { width: "100%", height: "100%" },
//     { length: -1, wrap: true },
//     "flex-start"
//   )
// };

// images.push(
//   new Image(i, {
//     // modal
//     img: fileArray[i],
//     description: "Description 2",
//     title: galleryName,
//     alt: "custom alt 2"
//   })
// );
