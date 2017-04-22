import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss']
})
export class ImageViewerComponent implements OnInit {

  @Input() images: Array<string> = [];

  current: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
