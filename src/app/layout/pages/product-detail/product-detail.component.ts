import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AuthService} from 'src/app/core/services/auth.service';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: any;

  constructor(private readonly route: ActivatedRoute, private _authService : AuthService,public translate: TranslateService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.product = data.product;
    })
  }

  // Add produc to cart.
  addCart(id: HTMLInputElement)
  {
    this._authService.addcart(id.value);
  }
}
