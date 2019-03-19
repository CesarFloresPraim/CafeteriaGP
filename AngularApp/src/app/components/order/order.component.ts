import {Component, OnInit, Provider} from '@angular/core';
import * as $ from 'jquery';
import * as moment from 'moment';

import {OrderService} from '../../modelService/order.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Product} from '../../modelService/product.model';
import {ProductService} from '../../modelService/product.service';
import {NgForm} from '@angular/forms';
import { Order} from '../../modelService/order.model';
import {CategoryService} from '../../modelService/category.service';
import { Category} from '../../modelService/category.model';
import { Select2OptionData } from 'ng2-select2';
import {ProvidersService} from '../../modelService/providers.service';
import {Unit} from '../../modelService/unit.model';
import {UnitService} from '../../modelService/unit.service';
import { Providers } from '../../modelService/providers.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

export class OrderComponent implements OnInit {
  time: string;
  product: Product;
  products: Product[];
  units: Unit[];
  orders: Order[];
  categories: Category[];
  cart: Array<any> = [];
  _id: string;
  providers: Providers[];
  droom: string;
  description: string;
  user: string;
  sortedProduct: Array<Select2OptionData> = [];
  ord: any;
  constructor(private orderService: OrderService, private flashMessage: FlashMessagesService, private productService: ProductService,
              private categoryService: CategoryService, private  providerService: ProvidersService, private unitService: UnitService) { }

  ngOnInit() {
    this.fetchOrders();
    this.fecthCategories();
    // this.fecthProductCategories();
    this.time = moment().format('LLLL');
    this.fetchUnits();
    this.fetchProviders();
  }


  fetchOrders() {
    this.orderService.getOrderList().subscribe((res: Order[]) => {
      this.orders = res;
    });
  }

  fecthCategories() {
    this.categoryService.getCategoryList().subscribe((res: Category[]) => {
      this.categories = res;
      for (let cat of res) {
        this.productService.getProductPerCategory(cat.name).subscribe((ress: Product[]) => {
          for (let prod of ress){
            let data = {
              id: prod._id,
              text: prod.name
            };
            let newOption = new Option(data.text, data.id, false, false);
            $('#select-' + cat.name + ' select').append(newOption).trigger('change');
          }
        });
      }
    });
    this.sortedProduct = [{
      id: '',
      text: 'Select a product'
    }];

  }

  onSubmit(form: NgForm) {
    if ( form.value._id == undefined) {
      this.ord = {
        form: form.value,
        cart: this.cart
      };
      this.orderService.postOrder(this.ord).subscribe(res => {
          this.flashMessage.show('Order saved succesfully!', { cssClass: 'alert-success', timeout: 2000 });
          console.log(res);
        });
      }
  }
  fetchUnits() {
    this.unitService.getUnitList().subscribe((res: Unit[]) => {
      this.units = res;
    });
  }
  fetchProviders() {
    this.providerService.getProviderList().subscribe((res: Providers[]) => {
      this.providers = res;
    });
  }
  onOrderProduct(form: NgForm) {
    console.log(form.value);
  }
  onRemove(prod: Product) {
    this.cart.splice(this.cart.findIndex(e => e._id === prod._id), 1);
  }
  onDelete(id: string) {
    this.orderService.deleteOrder(id).subscribe(res => {
      this.flashMessage.show('Order deleted succesfully!', { cssClass: 'alert-success', timeout: 2000 });
    });
  }
  addRow(event: any) {
    const category = event.name;
    this.providerService.getProvider($('#selectProv-' + category).val().toString()).subscribe((res: any) => {
      this.cart.push({
        _id: $('#select-' + category).find(':selected').val(),
        name: $('#select-' + category).find(':selected').text(),
        quantity: $('#quantity-' + category).val(),
        provider_id: $('#selectProv-' + category).val(),
        unit: $('#selectUnit-' + category + ' option:selected').text(),
        provider_name: res.name
      });
    });
  }
  fetchUnitsPerProduct(event: any) {
    console.log(event.target);
  }
}
