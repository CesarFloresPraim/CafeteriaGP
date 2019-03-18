import { Component, OnInit } from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages';
import {AuthorizationService} from '../../modelService/authorization.service';
import {Order} from '../../modelService/order.model';
import {OrderService} from '../../modelService/order.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  orders: Order[];
  constructor(private flashMessage: FlashMessagesService, private authorizationService: AuthorizationService,
              private orderService: OrderService) { }

  ngOnInit() {
    this.fetchOrders();
  }
  fetchOrders() {
    this.orderService.getOrderList().subscribe((res: Order[]) => {
      this.orders = res;
    });
  }
}
