import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import localeCO from '../locales/es-CO';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ToolbarComponent } from './presentation/toolbar/toolbar.component';
import { ItemDetailComponent } from './presentation/item-detail/item-detail.component';
import { ItemListComponent } from './presentation/item-list/item-list.component';
import { ItemComponent } from './presentation/item/item.component';
import { ProductRepository } from "./data/repositories/product.repository";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BreadcrumbComponent } from './presentation/breadcrumb/breadcrumb.component';

registerLocaleData(localeCO, 'es-CO');

@NgModule({
  declarations: [AppComponent, ToolbarComponent, ItemComponent, ItemListComponent, ItemDetailComponent, BreadcrumbComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-CO' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: '$' },
    ProductRepository
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
