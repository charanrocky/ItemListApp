import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemService } from './item.service';

@NgModule({
  declarations: [AppComponent, ItemListComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [ItemService],
  bootstrap: [AppComponent],
})
export class AppModule {}
