import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { User } from '../models/user';
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any;
  admin: any;
  cart: any;

  private User_SERVICE_BASE_URL = "/assets/templates";

  private cart_count = new BehaviorSubject<number>(this.getProductCount());
  public cart_count$ = this.cart_count.asObservable(); 

  constructor(private readonly http: HttpClient, private router: Router,private toastr: ToastrService) { }

  // Authenticates the user.
  authenticateUser(data: any):Observable<User | undefined>
  {
    const url = `${this.User_SERVICE_BASE_URL}/users.json`;
    return this.http.get<User[]>(url).pipe(
      map((user: User[]) => user.find(x => data.email.toLowerCase() === x.email  && data.password === x.password))
    );
  }

  // Checks if the user is already logged in.
  loggedin() {
    const token = localStorage.getItem("isLoggedIn");
    return token != null ? true : false;
  }

  // Stores the user data in local storage.
  storeUserData(user:any) {
    localStorage.setItem("user", JSON.stringify(user.name));
    localStorage.setItem("isLoggedIn", JSON.stringify(user.id));
  }

  // Logs out the user.
  logout() {
    this.user = null;
    this.UpdateProductCount();
    this.toastr.info("Logged Out Successfully.", "");
    localStorage.clear();
  }

  // Add product details to cart.
  addcart(id:string): boolean {
    var userId = localStorage.getItem("isLoggedIn"), savedCartData,cartData;
    if(!userId || id === ""){
      if(!this.toastr.currentlyActive)
      this.toastr.warning("Login to continue.", "Unauthorized")
       return false;
    }
       userId = JSON.parse(localStorage.getItem("isLoggedIn")) ;
     savedCartData = localStorage.getItem("cartItems");
     cartData = {id:userId ,productId:id ,quantity:1 };
     if(!savedCartData){
       localStorage.setItem("cartItems",JSON.stringify([cartData]));
       this.UpdateProductCount();
       if(!this.toastr.currentlyActive)
       this.toastr.success("Product Added Successfully.", "")
       return;
     }
     savedCartData = JSON.parse(savedCartData);
    if(!savedCartData.find( x => x.id == userId && x.productId == id)){
       savedCartData.push(cartData);
       localStorage.setItem("cartItems",JSON.stringify(savedCartData));
    }else 
    {
      savedCartData.forEach(function(x){ if(x.id == userId && x.productId == id) return x.quantity = x.quantity +1;})
      localStorage.setItem("cartItems",JSON.stringify(savedCartData));
    }

    if(!this.toastr.currentlyActive)
    this.toastr.success("Product Added Successfully.", "")

     this.UpdateProductCount();
        return true;
  }

  public UpdateProductCount()
  {

    this.cart_count.next(this.getProductCount());
  }

  private getProductCount()
  {
    var count = localStorage.getItem("cartItems");
    if (!count)
    return 0;

    count = JSON.parse(count).length;
    return Number(count);
  }
}