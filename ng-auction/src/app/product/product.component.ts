import { map, filter, switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductService } from '../shared/services';
import { ActivatedRoute } from '@angular/router';

@Component({
   selector: 'nga-product',
   templateUrl: './product.component.html',
   styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

   product$: Observable<Product>;
   suggestedProducts$: Observable<Product[]>;

   constructor(private route: ActivatedRoute, private productService: ProductService) { }

   ngOnInit(): void {
   }

}
