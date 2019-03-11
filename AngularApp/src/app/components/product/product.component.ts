import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ProductService } from '../../modelService/product.service';
import {Product} from '../../modelService/product.model';
import { Category} from '../../modelService/category.model';
import { FlashMessagesService } from 'angular2-flash-messages';
import {CategoryComponent} from '../category/category.component';
import {CategoryService} from '../../modelService/category.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService, CategoryComponent]
})
export class ProductComponent implements OnInit {
  products: Product[];
  product: Product;
  x: any;
  _id: string;
  name: string;
  description: string;
  price: string;
  type: string;
  constructor(private productService: ProductService, private categoryComponent: CategoryComponent,
              private flashMessage: FlashMessagesService) { }

  ngOnInit() {
    this.fetchProducts();
    this.categoryComponent.fetchCategories();
  }

  onSubmit(form: NgForm) {
    this.x = document.querySelector( '#selectName' );
    form.value.type = this.x.options[this.x.selectedIndex].text;
    if(form.value._id == undefined) {
      this.productService.postProduct(form.value).subscribe(res => {
        this.flashMessage.show('Product saved succesfully!', { cssClass: 'alert-success', timeout: 2000 });
        console.log(res);
      });
    } else {
      this.productService.putProduct(form.value).subscribe(res => {
        this.flashMessage.show('Product updated succesfully!', { cssClass: 'alert-success', timeout: 2000 });
      });
    }
  }
  fetchProducts() {
    this.productService.getProductList().subscribe((res: Product[]) => {
      this.products = res;
    });
  }
  onDelete(_id: string) {
    this.productService.deleteProduct(_id).subscribe(res => {
      this.flashMessage.show('Product deleted succesfully!', { cssClass: 'alert-success', timeout: 2000 });
    });
  }
  onUpdate(prod: Product) {
    this._id = prod._id;
    this.name =  prod.name;
    this.description = prod.description;
    this.price = prod.price;
    this.type = prod.type;


  }
}
