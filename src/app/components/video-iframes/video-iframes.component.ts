import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-iframes',
  templateUrl: './video-iframes.component.html',
  styleUrls: ['./video-iframes.component.scss']
})
export class VideoIframesComponent implements OnInit {

  @Input('urls') iframeUrls: string[];
  @Input('category') videoCategory: string;

  constructor() { }

  ngOnInit() {}
}
