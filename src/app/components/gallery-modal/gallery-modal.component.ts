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
  }

  arrowClickedEvent(arrowType: string) {
    if (arrowType == "prev") {
      this.image = this.imageArray[this.index - 1];
      this.index--;
    } else {
      this.image = this.imageArray[this.index + 1];
      this.index++;
    }
  }
}
