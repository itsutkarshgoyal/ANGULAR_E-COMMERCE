import { Component, OnInit } from "@angular/core";
import {AuthService} from 'src/app/core/services/auth.service'
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.scss"]
})
export class CheckoutComponent implements OnInit {
  name: String;
  email: String;
  address: String;
  country: String;
  state: String;
  zip: String;
  constructor(private router: Router, private toastr: ToastrService, public translate: TranslateService,public _auth_service: AuthService) {
    translate.currentLang = localStorage.getItem("preferedLanguage")? localStorage.getItem("preferedLanguage"):'en';
    translate.setDefaultLang(translate.currentLang);
  }

  ngOnInit() {}

  // places the order.
  output() {
    const addressdetails = {
      name: this.name,
      email: this.email,
      address: this.address,
      country: this.country,
      state: this.state,
      zip: this.zip
    };

    localStorage.removeItem("cartItems");
    this._auth_service.UpdateProductCount();
    this.toastr.success("Order Placed Successfully");
    this.router.navigate(["home"]);
  }
}
