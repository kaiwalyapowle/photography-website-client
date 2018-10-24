import { Component, OnInit } from "@angular/core";
import { FileLoaderService } from "../../services/file-loader.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-bts",
  templateUrl: "./bts.component.html",
  styleUrls: ["./bts.component.scss"]
})
export class BtsComponent implements OnInit {
  files: Observable<string[]>;
  panel: string = "bts";

  constructor(private fileLoaderService: FileLoaderService) {
    this.files = this.fileLoaderService.getFiles(this.panel);
  }

  ngOnInit() {}
}
