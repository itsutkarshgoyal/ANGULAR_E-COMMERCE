import { TestBed } from '@angular/core/testing';

import { ProductsResolver } from './products.resolver';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { Product, ProductService } from '../../core/public_api';

describe('ProductsResolver', () => {
  let resolver: ProductsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ProductService]
  });
    resolver = TestBed.inject(ProductsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
