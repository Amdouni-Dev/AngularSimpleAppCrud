import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponentComponent } from './add-product-component/add-product-component.component';
import { DetailsProductComponent } from './details-product/details-product.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ShowShoppingComponentComponent } from './show-shopping-component/show-shopping-component.component';

const routes: Routes = [

  {path:"addP", component:AddProductComponentComponent},
  {path:"home", component:HomeComponentComponent},
  {path:"shopping", component:ShowShoppingComponentComponent},
  {path:"detailP/:id", component:DetailsProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
