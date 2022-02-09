import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SearchFieldsComponent } from './search-fields/search-fields.component';
import { ScreenComponentComponent } from './screen-component/screen-component.component';

import { SearchTextBarComponent } from './search-text-bar/search-text-bar.component';
@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    SearchFieldsComponent,
    SearchTextBarComponent,
    ScreenComponentComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
