import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { EmptyPageComponent } from './pages/empty-page/empty-page.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { SearchProductComponent } from './pages/search-product/search-product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from './pages/cart/cart.component';
import {LoginPageComponent} from './pages/login-page/login-page.component'
import { FormsModule } from "@angular/forms";
import { CheckoutComponent } from './pages/checkout/checkout.component';

const components = [
  LoginPageComponent,
  SearchProductComponent,
  MainPageComponent,
  EmptyPageComponent,
  ProductDetailComponent
];

@NgModule({
  declarations: [components, CartComponent, CheckoutComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule,
    NgbModule,
    FormsModule
  ],
})
export class LayoutModule { }
