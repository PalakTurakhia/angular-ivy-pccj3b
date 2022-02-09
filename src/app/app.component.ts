import { Component } from '@angular/core';
import {searchFieldConfig} from './search-field-config';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  searchFieldConfig = searchFieldConfig;
  name = 'Angular ' ;
  
}
