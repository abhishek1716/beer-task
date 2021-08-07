import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { BeerComponent } from './beer/component/beer/beer.component';
import { BeerCardComponent } from './beer/component/beer-card/beer-card.component';
import { BeerSearchComponent } from './beer/component/beer-search/beer-search.component';
import { AbbreviatedPipe } from './beer/pipe/abbreviated.pipe';

@NgModule({
  declarations: [AppComponent, BeerComponent, BeerCardComponent, BeerSearchComponent, AbbreviatedPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
