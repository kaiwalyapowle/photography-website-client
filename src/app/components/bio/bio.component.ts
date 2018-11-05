import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FileLoaderService } from "../../services/file-loader.service";
import { MediaChange, ObservableMedia } from "@angular/flex-layout";
import { DataStoreService } from "src/app/services/data-store.service";

@Component({
  selector: "app-bio",
  templateUrl: "./bio.component.html",
  styleUrls: ["./bio.component.css"]
})
export class BioComponent implements OnInit {
  panelName: string = "bio";
  galleryPanels: string[] = ["awards", "bts"];
  file: string;
  activeMediaQuery = "";
  currentScreenSize: string = "";
  contentListTileLg: boolean = true;
  contentListTileMd: boolean = false;
  contentListTileXs: boolean = false;

  @Output("readMore")
  readMore = new EventEmitter();
  private readMorePressed: boolean = false;
  xsContentRowSpan: string = "1";
  readMoreBtnTxt: string = "Read more..";

  constructor(
    private fileLoaderService: FileLoaderService,
    private media: ObservableMedia,
    private datastoreService: DataStoreService
  ) {
    this.fileLoaderService.getFiles(this.panelName).subscribe(files => {
      this.file = files[0];
    });

    for (let panel of this.galleryPanels) {
      this.fileLoaderService.getFiles(panel).subscribe(files => {
        datastoreService.setFiles(panel, files);
      });
    }

    media.subscribe((change: MediaChange) => {
      this.activeMediaQuery = change
        ? "`$(change.mqAlias)` = ($(change.mediaQuery))"
        : "";
      this.currentScreenSize = change.mqAlias;
      if (change.mqAlias === "xs") {
        this.adjustScreenSize(false, false, true);
      } else if (change.mqAlias === "sm") {
        this.adjustScreenSize(true, false, false);
      } else if (change.mqAlias === "md") {
        this.adjustScreenSize(false, true, false);
      } else if (change.mqAlias === "lg") {
        this.adjustScreenSize(true, false, false);
      } else if (change.mqAlias === "xl") {
        this.adjustScreenSize(true, false, false);
      }
    });
  }

  adjustScreenSize(lg: boolean, md: boolean, xs: boolean): void {
    this.contentListTileLg = lg;
    this.contentListTileMd = md;
    this.contentListTileXs = xs;
  }

  readMoreBio() {
    this.readMore.emit("emitting read more event");
    this.readMorePressed = !this.readMorePressed;
    this.xsContentRowSpan = this.readMorePressed ? "3" : "1";
    this.readMoreBtnTxt = this.readMorePressed ? "Read less.." : "Read more..";
  }

  ngOnInit() {}
}
