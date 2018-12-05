import { Component, OnInit, Input } from "@angular/core";
import { FileLoaderService } from "../../services/file-loader.service";
import { DataStoreService } from "../../services/data-store.service";

@Component({
  selector: "app-subcatalogue",
  templateUrl: "./subcatalogue.component.html",
  styleUrls: ["./subcatalogue.component.scss"]
})
export class SubcatalogueComponent implements OnInit {
  @Input("panel")
  panel: string;
  @Input("gallery")
  gallery: string[];
  @Input("panelDispName")
  panelDispName: string;

  slideConfig;
  showPanel: boolean = false;
  thumbnailFolderName: string;
  thumbnail: string;
  galleryName: string;
  thumbnails: string[] = [];

  constructor(
    private fileLoaderService: FileLoaderService,
    private dataStoreService: DataStoreService
  ) {}

  ngOnInit() {
    this.slideConfig = {
      // slidesToShow: 1,
      // slidesToScroll: 4,
      autoplay: false,
      draggable: true,
      autoplaySpeed: 2000
    };

    if (this.panel) {
      this.dataStoreService.setFiles(this.panel, this.gallery);
      for (let galleryObj of this.gallery) {
        if (galleryObj.includes("_Thumbnail")) {
          this.thumbnailFolderName = galleryObj;
        } else {
          this.galleryName = this.panelDispName;
        }
      }
      this.fileLoaderService
        .getFilesTree(this.panel, this.thumbnailFolderName)
        .subscribe(files => {
          this.thumbnails = files;
          this.thumbnail = files[0];
          console.log("thumbnails " + this.thumbnail);
          if (this.thumbnail) {
            this.showPanel = true;
          }
        });
    }
  }

  afterChange(e) {
    console.log("afterChange");
  }
}
