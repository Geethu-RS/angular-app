import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  id;

  constructor(
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(params => {
      console.log('params...',params);
      this.id = params.id;
     });
   }

  ngOnInit(): void {
  
  }
  

}
