import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent }  from './product-list/product-list.component'
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductAddComponent } from './product-add/product-add.component';

const routes: Routes = [
  { path: 'product-list', component: ProductListComponent},
  { path: 'product-details', component: ProductDetailsComponent },
  { path: 'product-add', component: ProductAddComponent },
];
@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    ProductAddComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class ProductsModule { }
