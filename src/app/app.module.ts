import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponentComponent } from './add-product-component/add-product-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ShowShoppingComponentComponent } from './show-shopping-component/show-shopping-component.component';
import { FormsModule } from '@angular/forms';
import { ErrorsComponent } from './errors/errors.component';
import { DetailsProductComponent } from './details-product/details-product.component';

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponentComponent,
    HomeComponentComponent,
    ShowShoppingComponentComponent,
    ErrorsComponent,
    DetailsProductComponent, 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
