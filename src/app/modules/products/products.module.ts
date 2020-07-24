import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent }  from './product-list/product-list.component'
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductAddComponent } from './product-add/product-add.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { RatingModule } from 'ng-starrating';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    ProductAddComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    RatingModule
  ]
})
export class ProductsModule { }
