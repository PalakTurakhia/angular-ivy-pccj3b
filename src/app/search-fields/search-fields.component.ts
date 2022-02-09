import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  Type,
} from '@angular/core';
import { SearchField } from '../search-field-config';

@Component({
  selector: 'app-search-fields',
  templateUrl: './search-fields.component.html',
  styleUrls: ['./search-fields.component.css'],
})
export class SearchFieldsComponent implements OnInit {
  
  constructor() {}
  txtValue = '';
  @Input() searchFieldConfig: SearchField[];
  @Output() textBarPopulator = new EventEmitter<string>();

  ngOnInit() {}
  
  onEnter() {
    this.txtValue = '';
    this.searchFieldConfig.forEach((obj) => {
      if (obj.value) {
        this.txtValue += obj.symbol + obj.value;
      }
    });
    this.textBarPopulator.emit(this.txtValue);
  }
 
}
