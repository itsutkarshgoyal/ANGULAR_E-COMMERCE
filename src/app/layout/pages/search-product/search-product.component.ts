import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, ProductService } from 'src/app/core/public_api';
import {AuthService} from 'src/app/core/services/auth.service';
import { map } from 'rxjs/operators';
import { stringify } from '@angular/compiler/src/util';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.scss']
})
export class SearchProductComponent implements OnInit {

  products: Product[] = [];
  filterProduct : Product[] = [];

  constructor(private readonly route: ActivatedRoute, private readonly router: Router, private _productService:ProductService,private _authService : AuthService, public translate: TranslateService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.products = JSON.parse(JSON.stringify(data.productList));
      this.filterProduct = data.productList;
    })

    this._productService.searchText$.subscribe((text:string) => {this.searchProduct(text)} )
  }

  // Navigate to product detail page.
  viewProduct(productCode: string) {
    this.router.navigateByUrl('/home/search/' + productCode);
  }

  // Search the product.
  searchProduct(filterBy: string) {
    filterBy = filterBy.toLowerCase();
    
    if(filterBy === "")
    {
     this.products = JSON.parse(JSON.stringify(this.filterProduct));
     return
    }

    this.products =  this.products.filter((product: Product) =>{
       return product.name.toLowerCase().includes(filterBy)
    })
  }

  // Add products to cart.
  addCart(id : any)
  {
    this._authService.addcart(id);
  }

}
