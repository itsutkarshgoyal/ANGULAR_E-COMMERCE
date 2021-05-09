import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Product, ProductService } from 'src/app/core/public_api';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<Product| undefined> {

  constructor(private readonly productService: ProductService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product| undefined> {
    const productId = route.paramMap.get('productId');
    return this.productService.getProduct(productId != null ? productId : "");
  }
}
