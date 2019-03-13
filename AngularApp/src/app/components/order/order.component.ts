import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

import {OrderService} from '../../modelService/order.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Product} from '../../modelService/product.model';
import {ProductService} from '../../modelService/product.service';
import {NgForm} from '@angular/forms';
import { Order} from '../../modelService/order.model';
import {CategoryService} from '../../modelService/category.service';
import { Category} from '../../modelService/category.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  products: Product[];
  orders: Order[];
  categories: Category[];
  cart: Array<Product> = [];
  _id: string;
  droom: string;
  description: string;
  user: string;
  ord: any;
  constructor(private orderService: OrderService, private flashMessage: FlashMessagesService, private productService: ProductService,
              private categoryService: CategoryService) { }

  ngOnInit() {
    this.fetchOrders();
    this.fecthCategories();
  }

  fetchOrders() {
    this.orderService.getOrderList().subscribe((res: Order[]) => {
      this.orders = res;
    });
  }

  fecthCategories() {
    this.categoryService.getCategoryList().subscribe((res: Category[]) => {
      this.categories = res;
      for (let element of this.categories) {
        this.productService.getProductPerCategory(element.name).subscribe((res: Product[]) => {
          let $dropdown = $('#' + element.name + '_cat');
          for (let prod of res) {
            $dropdown.append($('<option />').val(prod._id).text(prod.name));
          }
        });
      }
    });
  }
  onKeyUp(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      // this.fetchProducts($('#search_prod').val());
      // show table
      // $('#tableDiv').show();
    }
  }
  onSubmit(form: NgForm) {
    if ( form.value._id == undefined) {
      this.ord = {
        form: form.value,
        cart: this.cart
      };
      this.orderService.postOrder(this.ord).subscribe(res => {
          this.flashMessage.show('Provider saved succesfully!', { cssClass: 'alert-success', timeout: 2000 });
          console.log(res);
        });
      }
  }
  onAdd(product: Product) {
    this.cart.push(product);
    $('#tableDiv').hide();
    console.log(this.cart);

  }
  onRemove(prod: Product) {
    this.cart.splice(this.cart.findIndex(e => e._id === prod._id), 1);
  }
  onDelete(id: string) {
    this.orderService.deleteOrder(id).subscribe(res => {
      this.flashMessage.show('Order deleted succesfully!', { cssClass: 'alert-success', timeout: 2000 });
      console.log(res);
    });
  }
  addRow() {

  }
}
