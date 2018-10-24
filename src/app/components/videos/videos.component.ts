import { Component, OnInit } from "@angular/core";
import { ObservableMedia, MediaChange } from "@angular/flex-layout";

@Component({
  selector: "app-videos",
  templateUrl: "./videos.component.html",
  styleUrls: ["./videos.component.scss"]
})
export class VideosComponent implements OnInit {
  temp_allUrls: string[] = [
    "https://www.youtube.com/embed/ithTZdZI19s",
    "https://www.youtube.com/embed/PZrKikhcgJ8",
    "https://www.youtube.com/embed/gbohysTDS6k",
    "https://www.youtube.com/embed/WHnTOMAsbLk"
  ];

  documentaryUrls: string[] = [
    "https://www.youtube.com/embed/gbohysTDS6k",
    "https://www.youtube.com/embed/ithTZdZI19s"
  ];

  marketingAndAdvertisingUrls: string[] = [
    "https://www.youtube.com/embed/PZrKikhcgJ8",
    "https://www.youtube.com/embed/WHnTOMAsbLk"
  ];

  currentScreenSize;
  slidesToShow;
  slideConfig;
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
    this.slideConfig = {
      slidesToShow: this.slidesToShow,
      slidesToScroll: this.slidesToShow,
      autoplay: false,
      draggable: true,
      autoplaySpeed: 1000
    };
  }
}
