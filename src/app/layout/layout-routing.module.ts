import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { SearchProductComponent } from './pages/search-product/search-product.component';
import { AuthGuard } from './guards/auth.guard';
import { EmptyPageComponent } from './pages/empty-page/empty-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { CartComponent } from './pages/cart/cart.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ProductResolver } from './resolver/product.resolver';
import { ProductsResolver } from './resolver/products.resolver';
import {CheckoutComponent} from './pages/checkout/checkout.component';

// Holds the route of the module.
const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: MainPageComponent,
    children: [
      {
        path: 'search', component: SearchProductComponent, resolve: {
          productList: ProductsResolver
        }
      }, {
        path: 'search/:productId', component: ProductDetailComponent, resolve: {
          product: ProductResolver
        }
      },
      { path: '', redirectTo: 'search', pathMatch: 'full' },
    ],
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: EmptyPageComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule { }
