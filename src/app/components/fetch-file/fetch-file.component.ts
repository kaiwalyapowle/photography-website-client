import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FileLoaderService } from '../../services/file-loader.service';

@Component({
  selector: 'app-fetch-file',
  templateUrl: './fetch-file.component.html',
  styleUrls: ['./fetch-file.component.css']
})
export class FetchFileComponent implements OnInit {

  showFile = false;
  files: Observable<string[]>

  constructor(private fileLoaderService: FileLoaderService) { }

  ngOnInit() {
    // this.files = this.fileLoaderService.getFiles();
  }

  // showFiles(enabled: boolean) {
  //   this.showFile = enabled;
  //   if (enabled) {
  //   }
  // }

}
