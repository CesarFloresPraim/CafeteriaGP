import { Component, OnInit } from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages';
import {AuthorizationService} from '../../modelService/authorization.service';
import {Order} from '../../modelService/order.model';
import {OrderService} from '../../modelService/order.service';
import * as $ from "jquery";

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {
  orders: Order[];
  name: string;
  quantity: string;
  provider: string;
  unit: string;
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
  onApprove(order: Order, event: any) {
    let approvedCart: Array<any> = [];
    let avoidFirst = true;
    const table = document.querySelector('#table-' + event.name);
    for (let row of table.rows) {
      let prod = [];
      for (let cell of row.cells) {
        prod.push(cell.innerText); // or cell.innerHtml (you can also set value to innerText/Html)
      }
      if (!avoidFirst) {
        approvedCart.push({
          name: prod[0],
          unit: prod[1],
          quantity: prod[2],
          provider_name: prod[3],
          provider_id: prod[4]
        });
      }
      avoidFirst = false;
      prod = [];
    }
    console.log(approvedCart);
    this.orderService.putOrder(order._id, approvedCart).subscribe(res => {
      this.flashMessage.show('Order approved succesfully!', { cssClass: 'alert-success', timeout: 2000 });
    });
  }
  onDisapprove() {

  }
/*  hideBody() {
    if () {
      $('#dining_room_body').slideUp();
      active = false;
    } else {
      $('#dining_room_body').slideDown();
      active = true;
    }
  }*/
}
