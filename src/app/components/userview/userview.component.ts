import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { catalogue } from "../folder-structure/folder-structure.component";
import { MediaChange, ObservableMedia } from "@angular/flex-layout";

@Component({
  selector: "app-userview",
  templateUrl: "./userview.component.html",
  styleUrls: ["./userview.component.css"]
})
export class UserviewComponent implements OnInit {
  catalogues = catalogue;
  activeMediaQuery = "";
  adjustRowHeight: string = "620px";
  adjustBioRowspan: string = "4";
  adjustSlideshowRowspan: string = "2";
  

  private readMorePressed: boolean = false;

  constructor(private media: ObservableMedia) {
    media.subscribe((change: MediaChange) => {
      this.activeMediaQuery = change
        ? "`$(change.mqAlias)` = ($(change.mediaQuery))"
        : "";
      console.log("======================> " + change.mqAlias);
      if (change.mqAlias === "xs") {
        this.adjustRowHeight = "5.75:2";
        this.adjustBioRowspan = "5";
        this.adjustSlideshowRowspan = "3";
      
      } else if (change.mqAlias === "sm") {
        this.adjustRowHeight = "250px";
        this.adjustBioRowspan = "4";
        this.adjustSlideshowRowspan = "2";
       
      } else if (change.mqAlias === "md") {
        this.adjustRowHeight = "5.75:2";
        this.adjustBioRowspan = "5";
        this.adjustSlideshowRowspan = "3";
        
      } else if (change.mqAlias === "lg") {
        this.adjustRowHeight = "620px";
        this.adjustSlideshowRowspan = "1";
        this.adjustBioRowspan = "2";
       
      } else if (change.mqAlias === "xl") {
        this.adjustRowHeight = "620px";
        this.adjustSlideshowRowspan = "1";
        this.adjustBioRowspan = "2";
       
      }
    });
  }

  addBioRow() {
    this.readMorePressed = !this.readMorePressed;
    this.adjustBioRowspan = this.readMorePressed ? "7" : "5";
  }

  ngOnInit() {}
}
