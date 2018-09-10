import { AuthorsvcService } from './authorsvc.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    AuthorsvcService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
