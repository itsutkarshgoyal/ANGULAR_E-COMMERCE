import { Component, OnInit } from '@angular/core';
import {ProductService} from 'src/app/core/services/product.service';
import {TranslateService} from '@ngx-translate/core';
import { Router } from "@angular/router";
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public cartdisplay = [];
  public cuser;
  public totalPrice = 0;
  public subtotal = 0;
  public tax = 0;
  public total;
  public shipping;
  public cart = [];
  public checkoutcart = [];
  public loggedInUser;

  constructor(private _productService : ProductService, private router: Router,public translate: TranslateService, public _auth_service: AuthService) {
    translate.currentLang = localStorage.getItem("preferedLanguage")? localStorage.getItem("preferedLanguage"):'en';
    translate.setDefaultLang(translate.currentLang);
   }

  ngOnInit(): void {
    this.loadData();
  }

  // Loads the cart data.
  loadData() {
    this.cuser = JSON.parse(localStorage.getItem("cartItems"));
    this.loggedInUser = JSON.parse(localStorage.getItem("isLoggedIn"));

    if(!this.cuser)
    return ;

     this._productService.getProducts().subscribe(data => {
      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j  <this.cuser.length; j++ ) {
         if (this.cuser[j].productId == data[i].id && this.loggedInUser == this.cuser[j].id ){
          data[i].quantity = this.cuser[j].quantity;
          this.cartdisplay.push(data[i]);
         }
        }
      }

      this.onChangeQty();
    });
  }

  // Removes the products from the cart.
  deletedata(id) {
    this.cartdisplay = [];
    this.cuser =  this.cuser.filter (function(x){return x.productId != id;});
    localStorage.setItem("cartItems", JSON.stringify(this.cuser));
    this._auth_service.UpdateProductCount();
    this.loadData();
  }

  // calculate the data.
  onChangeQty() {
    this.subtotal = 0;
    this.tax;
    this.shipping = 100;
    for (let i = 0; i < this.cartdisplay.length; i++) {
      this.subtotal =
        this.subtotal +
        this.cartdisplay[i].price *
          this.cartdisplay[i].quantity;
    }

    this.tax = (this.subtotal * 5) / 100;
    this.totalPrice = this.subtotal + this.tax + this.shipping;
  }

  // Nagivate to checkout page.
  checkoutdetail() {
    localStorage.setItem("total", JSON.stringify(this.totalPrice));
    this.router.navigate(["checkout"]);
  }

}
