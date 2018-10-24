import { Component, OnInit } from "@angular/core";
import { FileLoaderService } from "../../services/file-loader.service";
import { Observable } from "rxjs";
import { awards_publishedwork } from "../folder-structure/folder-structure.component";

@Component({
  selector: "app-awards",
  templateUrl: "./awards.component.html",
  styleUrls: ["./awards.component.scss"]
})
export class AwardsComponent implements OnInit {
  title;
  awards_publishedwork_contents;

  constructor(private fileLoaderService: FileLoaderService) {
    this.title = awards_publishedwork["title"];
    this.awards_publishedwork_contents = awards_publishedwork["contents"];
  }

  ngOnInit() {}
}
