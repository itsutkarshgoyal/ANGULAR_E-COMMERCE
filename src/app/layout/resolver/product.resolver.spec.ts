import { TestBed } from '@angular/core/testing';

import { ProductResolver } from './product.resolver';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProductResolver', () => {
  let resolver: ProductResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [ HttpClientTestingModule ],
    });
    resolver = TestBed.inject(ProductResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
