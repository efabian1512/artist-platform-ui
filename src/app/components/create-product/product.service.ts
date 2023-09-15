import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Endpoints } from 'src/app/endpoints';
import { Product } from 'src/app/models/product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private hhtp: HttpClient) {}

  createProduct(product: Product) {
    const url = Endpoints.CREATE_POST;
    return this.hhtp.post(url, product);
  }
}
