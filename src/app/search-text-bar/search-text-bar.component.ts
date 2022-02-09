import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { searchFieldConfig } from '../search-field-config';
@Component({
  selector: 'app-search-text-bar',
  templateUrl: './search-text-bar.component.html',
  styleUrls: ['./search-text-bar.component.css'],
})
export class SearchTextBarComponent implements OnInit {
  @Input() barTextValue: String;
  @Output() fieldPopulator = new EventEmitter<string>();
  @Output() clearValues = new EventEmitter();

  constructor() {}
  searchFieldConfig = searchFieldConfig;
  ngOnInit() {}

  onKeyUp(e) {
    this.fieldPopulator.emit(e.target.value);
  }

  onClear(e) {
    this.barTextValue = '';
    this.clearValues.emit(e.target.value);
  }
}
