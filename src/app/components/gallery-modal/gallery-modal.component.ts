import { Component, OnInit, Inject, ViewEncapsulation } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-gallery-modal",
  templateUrl: "./gallery-modal.component.html",
  styleUrls: ["./gallery-modal.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class GalleryModalComponent implements OnInit {
  image: string;
  imageArray: string[] = [];
  index: number = 0;
  intervalCallback;
  slideshowClicked: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<GalleryModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.imageArray = data.imageArray;
    this.index = data.selectedImageIndex;
    this.image = this.imageArray[this.index];
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    console.log(this.data);
    this.dialogRef.backdropClick().subscribe(result => {
      clearInterval(this.intervalCallback);
      this.slideshowClicked = false;
    });
  }

  arrowClickedEvent(arrowType: string) {
    if (arrowType == "prev") {
      if (this.index == 0) {
        // If image is first, then go to end of array
        this.index = this.imageArray.length - 1;
      } else {
        this.index--;
      }
      this.image = this.imageArray[this.index];
    } else {
      if (this.index == this.imageArray.length - 1) {
        // If image is last one, restart the array indexing
        this.index = 0;
      } else {
        this.index++;
      }
      this.image = this.imageArray[this.index];
    }
  }

  beginSlideshow() {
    this.slideshowClicked = true;
    this.intervalCallback = setInterval(() => {
      if (this.index != this.imageArray.length - 1) {
        this.index++;
        this.image = this.imageArray[this.index];
        console.log("slideshow index = " + this.index);
        console.log("image = " + this.image);
      } else {
        clearInterval(this.intervalCallback);
        this.slideshowClicked = false;
        this.dialogRef.close();
      }
    }, 2000);
  }
}
