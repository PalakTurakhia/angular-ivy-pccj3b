import { Component, NgModule, OnInit } from '@angular/core';

import { searchFieldConfig, SearchField } from '../search-field-config';
@Component({
  selector: 'app-screen-component',
  templateUrl: './screen-component.component.html',
  styleUrls: ['./screen-component.component.css'],
})
export class ScreenComponentComponent implements OnInit {
  searchFieldConfig = searchFieldConfig;
  constructor() {}
  barText = '';
  objIndex = 0;
  symbolArr = new Set();
  symbolPos = 0;

  ngOnInit() {
    searchFieldConfig.forEach((obj) => this.symbolArr.add(obj.symbol));
  }

  populateSearchTextBar(searchString: string) {
    this.barText = searchString;
  }
  populateSearchFields(txt: string) {
    let configObj = null;
    let object1 = null;
    let lastChar = txt.charAt(txt.length - 1);
    if (txt === '') {
      searchFieldConfig.forEach((obj) => {
        obj.value = '';
      });
      return;
    }

    if (this.symbolArr.has(lastChar)) {
      for (let i = 0; i < searchFieldConfig.length; i++) {
        if (searchFieldConfig[i].symbol === lastChar) {
          this.objIndex = i;
          this.symbolPos = txt.length;
          break;
        }
      }
    } else {
      searchFieldConfig[this.objIndex].value = txt.substr(
        this.symbolPos,
        txt.length - this.symbolPos
      );
    }
  }
}
