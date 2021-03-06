import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './shared/services/product.service';
import { RouterModule } from '@angular/router';
import { SearchFormModule } from './shared/components';

@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      MatButtonModule,
      MatIconModule,
      MatToolbarModule,
      MatSidenavModule,
      FlexLayoutModule,
      HttpClientModule,
      SearchFormModule
   ],
   providers: [ProductService],
   bootstrap: [AppComponent]
})
export class AppModule { }
