import { Component, OnInit } from '@angular/core';
import {TrailerService} from "../../modelService/trailer.service";
import {DiningroomService} from "../../modelService/diningroom.service";
import {Diningroom} from "../../modelService/diningroom.model";
import {OrderService} from "../../modelService/order.service";
import {Product} from '../../modelService/product.model';
import {Order} from "../../modelService/order.model";

@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.css']
})
export class TrailerComponent implements OnInit {
  rooms: Diningroom[];
  destinies: Diningroom[] = [];
  products: any[] = [];
  constructor(private trailerService: TrailerService, private diningroomSerivce: DiningroomService, private orderService: OrderService) { }

  ngOnInit() {
    this.fetchRooms();
  }
  fetchRooms() {
    this.diningroomSerivce.getRoomList().subscribe((res: Diningroom[]) => {
      this.rooms = res;
    });
  }
  onAddDestiny() {
    this.diningroomSerivce.getRoom($('#selectDestiny').val().toString()).subscribe((res: Diningroom) => {
      this.destinies.push(res);
      this.fetchProductDestinyOrder();
    });
  }
  onDelete(destiny: Diningroom) {
    this.destinies.splice( this.destinies.indexOf(destiny), 1 );
    this.fetchProductDestinyOrder();
  }
  fetchProductDestinyOrder() {
    this.products = [];
    for (let dest of this.destinies) {
      this.orderService.getOrder(dest.name).subscribe((res: Order[]) => {
        res.forEach( element => {
          for (let prod of element.approvedProducts) {
            this.products.push(prod);
          }
        });
      });
    }
  }
}
