import { Component, OnInit, Input } from "@angular/core";
import { ObservableMedia, MediaChange } from "@angular/flex-layout";

@Component({
  selector: "app-catalogue",
  templateUrl: "./catalogue.component.html",
  styleUrls: ["./catalogue.component.scss"]
})
export class CatalogueComponent implements OnInit {
  @Input("catalogue")
  catalogue;

  currentScreenSize;
  slidesToShow;
  slideConfig;
  catalogueContents;
  activeMediaQuery = "";

  afterChange(e) {
    console.log("afterChange");
  }

  constructor(private media: ObservableMedia) {
    media.subscribe((change: MediaChange) => {
      this.activeMediaQuery = change
        ? "`$(change.mqAlias)` = ($(change.mediaQuery))"
        : "";
      this.currentScreenSize = change.mqAlias;
      if (change.mqAlias === "xs") {
        this.slidesToShow = 1;
      } else if (change.mqAlias === "sm") {
        this.slidesToShow = 2;
      } else if (change.mqAlias === "md") {
        this.slidesToShow = 2;
      } else if (change.mqAlias === "lg") {
        this.slidesToShow = 3;
      } else if (change.mqAlias === "xl") {
        this.slidesToShow = 3;
      }
    });
  }

  ngOnInit() {
    this.catalogueContents = this.catalogue["contents"];
    this.slideConfig = {
      slidesToShow: this.slidesToShow,
      slidesToScroll: this.slidesToShow,
      autoplay: false,
      draggable: true,
      autoplaySpeed: 1000
    };
  }
}
