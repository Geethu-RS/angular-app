import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list'
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
  ,
  exports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule
  ]
})
export class MaterialModule { }
