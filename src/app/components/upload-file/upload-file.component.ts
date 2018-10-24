import { Component, OnInit, Input } from '@angular/core';
import { FileLoaderService } from '../../services/file-loader.service';
import { HttpResponse, HttpEventType } from '@angular/common/http'

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {
  @Input('paneName') paneName: string;
  @Input('galleryName') galleryName: string;

  selectedFiles: FileList;
  fileToBeUploaded: File;
  progress: { percentage: number } = { percentage: 0 };

  constructor(private fileLoaderService: FileLoaderService) { }

  ngOnInit() {
  }

  selectFiles(event) {
    this.selectedFiles = event.target.files;
  }


  upload() {
    this.fileToBeUploaded = this.selectedFiles.item(0);
    if (this.galleryName) {
      this.fileLoaderService.pushFileTreeToStorage(this.fileToBeUploaded, this.paneName, this.galleryName).subscribe(event => this.processProgressBar(event));
    } else {
      this.fileLoaderService.pushFileToStorage(this.fileToBeUploaded, this.paneName).subscribe(event => this.processProgressBar(event));
    }
    this.selectedFiles = undefined;
  }

  processProgressBar(event) {
    if (event.type === HttpEventType.UploadProgress) {
      this.progress.percentage = Math.round(100 * event.loaded / event.total);
    } else if (event instanceof HttpResponse) {
      console.log('file uploaded successfully !');
    }
  }

}
