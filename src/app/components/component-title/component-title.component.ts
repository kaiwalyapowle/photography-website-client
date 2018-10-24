import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-component-title",
  templateUrl: "./component-title.component.html",
  styleUrls: ["./component-title.component.scss"]
})
export class ComponentTitleComponent implements OnInit {
  @Input()
  title: string;

  constructor() {}

  ngOnInit() {}
}
