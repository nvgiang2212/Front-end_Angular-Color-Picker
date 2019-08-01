import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  private _background = '#999';

  onChange(value) {
    this._background = value;
  }

  get background(): string {
    return this._background;
  }

  set background(value: string) {
    this._background = value;
  }

  constructor() { }

  ngOnInit() {
  }

}
