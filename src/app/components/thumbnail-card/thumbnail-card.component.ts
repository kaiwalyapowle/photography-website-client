import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs";
import { FileLoaderService } from "../../services/file-loader.service";
import { MatDialog } from "@angular/material";
import { GalleryModalComponent } from "../gallery-modal/gallery-modal.component";

@Component({
  selector: "app-thumbnail-card",
  templateUrl: "./thumbnail-card.component.html",
  styleUrls: ["./thumbnail-card.component.scss"]
})
export class ThumbnailCardComponent implements OnInit {
  @Input("title")
  content_title: string;
  @Input("panelName")
  panelName: string;
  @Input("description")
  description: string;

  files: Observable<String[]>;

  constructor(
    private fileLoaderService: FileLoaderService,
    public dialog: MatDialog
  ) {}

  openDialog(file: string): void {
    const dialogRef = this.dialog.open(GalleryModalComponent, {
      height: "600px",
      hasBackdrop: true,
      
      data: { title: this.content_title, image: file },
      backdropClass: "dialog-backdrop"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
      // this.animal = result;
    });
  }

  ngOnInit() {
    this.files = this.fileLoaderService.getFiles(this.panelName);
  }
}
