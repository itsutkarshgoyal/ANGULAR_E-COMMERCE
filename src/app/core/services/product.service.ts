import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { Product } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private PRODUCT_SERVICE_BASE_URL = "/assets/templates";

  constructor(private readonly http: HttpClient) { }

  // Gets the list of products.
  public getProducts(): Observable<Product[]> {
    const url = `${this.PRODUCT_SERVICE_BASE_URL}/products.json`;
    return this.http.get<Product[]>(url);
  }

  // Gets the product details.
  public getProduct(productId: string): Observable<Product | undefined> {
  return this.getProducts()
  .pipe(
    map((products: Product[]) => products.find(p => p.id === productId))
  );
}

private searchtext: BehaviorSubject<string> = new BehaviorSubject<string>("");
public searchText$ = this.searchtext.asObservable();

// Emits the search text.
public searchProduct(searchText: string)
{
  this.searchtext.next(searchText)
}

}