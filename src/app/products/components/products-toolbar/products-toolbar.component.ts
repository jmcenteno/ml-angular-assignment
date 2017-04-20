import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-toolbar',
  templateUrl: './products-toolbar.component.html',
  styleUrls: ['./products-toolbar.component.scss']
})
export class ProductsToolbarComponent implements OnInit {

  @Input() mode: String = 'grid';
  @Output() changeMode: EventEmitter<any> = new EventEmitter();

  @Input() sortBy: String = 'name';

  constructor() { }

  ngOnInit() {
  }

  setMode(mode) {

    this.mode = mode;
    this.changeMode.emit(mode);

  }

}
