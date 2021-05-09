import { Component, OnInit } from '@angular/core';
import {ProductService} from 'src/app/core/services/product.service'
import {AuthService} from 'src/app/core/services/auth.service'
import {TranslateService} from '@ngx-translate/core';

import { Router } from "@angular/router";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public cart_count:number = 0;
  constructor(private _productService : ProductService, public router: Router,public _authService : AuthService, public translate: TranslateService) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');

   }

  ngOnInit(): void {
    this._authService.cart_count$.subscribe(response => {this.cart_count = response} )
  }

  searchText(text: HTMLInputElement)
  {
    this.router.navigate([""]);
    this._productService.searchProduct(text.value);
  }

  onLoginClick() {
    this.router.navigate(["login"]);
  }

  onLogoutClick() {
    this._authService.logout();
    this.router.navigate(["login"]);
    return false;
  }
}
