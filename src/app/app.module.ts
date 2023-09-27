import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // THIS LINE OF CODE
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule, FormsModule // AND ITS RESPECTIVE IMPORT
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }