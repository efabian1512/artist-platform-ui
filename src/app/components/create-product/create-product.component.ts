import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../models/product.model';
import { ProductService } from './product.service';

@Component({
  selector: 'create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  productForm: FormGroup = new FormGroup({}); 
  formBuilder: FormBuilder = new FormBuilder();

  constructor(private productService: ProductService) {}

 

  
  ngOnInit(): void {
    this.buildProductForm();
  }

  buildProductForm(){
    this.productForm = this.formBuilder.group({
      productName: ['', Validators.required],
      price: [0, Validators.required],
      image: [Blob]
    });
  }

  saveProduct(product: Product) {
    this.productService.createProduct(product).subscribe((response: any) => response);
  }

  get price() {
    return this.productForm.get('price');
  }

  get productName() {
    return this.productForm.get('productName');
  }

  get image() {
    return this.productForm.get('image');
  }


}
