import { Component, OnInit } from '@angular/core';
import { FileLoaderService } from '../../services/file-loader.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {

  files: Observable<string[]>
  panelName: string = "slideshow";

  constructor(private fileLoaderService: FileLoaderService) {
    this.files = this.fileLoaderService.getFiles(this.panelName);
  }

  ngOnInit() {}
}
