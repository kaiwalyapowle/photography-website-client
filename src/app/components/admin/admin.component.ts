import { Component, OnInit } from '@angular/core';
import { catalogue } from '../folder-structure/folder-structure.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  catalogues = catalogue;

  constructor() { }

  ngOnInit() {
    console.log(this.catalogues);
  }

  title = 'SaeeBhurke.com';
  description = 'Photo Gallery';

}
