import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

import { Diningroom } from '../../modelService/diningroom.model';
import {DiningroomService} from '../../modelService/diningroom.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import * as $ from 'jquery';

@Component({
  selector: 'app-diningroom',
  templateUrl: './diningroom.component.html',
  styleUrls: ['./diningroom.component.css']
})
export class DiningroomComponent implements OnInit {
  room: Diningroom;
  rooms: Diningroom[];
  _id: string;
  name: string;
  manager: string;
  street: string;
  zip_code: string;
  number: string;
  street_address: string;
  settlement: string;
  active = true;
  constructor(private diningroomService: DiningroomService, private flashMessage: FlashMessagesService) { }

  ngOnInit() {
    this.fetchRooms();
    //$('#bootstrap-data-table').DataTable();
  }

  onSubmit(form: NgForm) {
    if(form.value._id == undefined){
      if(form.value.name == undefined || form.value.manager == undefined) {
        this.flashMessage.show('Name and Manager are required fields!', { cssClass: 'alert-danger', timeout: 2000 });
      } else {
        this.diningroomService.postRoom(form.value).subscribe(res => {
          this.flashMessage.show('Dining room saved succesfully!', { cssClass: 'alert-success', timeout: 2000 });
          console.log(res);
        });
      }
    } else {
      this.diningroomService.putRoom(form.value).subscribe(res => {
        this.flashMessage.show('Dining room saved succesfully!', { cssClass: 'alert-success', timeout: 2000 });
        console.log(res);
      });
    }

  }
  fetchRooms() {
    this.diningroomService.getRoomList().subscribe((res: Diningroom[]) => {
      this.rooms = res;
    });
  }
  onDelete(_id: string) {
    this.diningroomService.deleteRoom(_id).subscribe(res => {
      this.flashMessage.show('Dining room deleted succesfully!', { cssClass: 'alert-success', timeout: 2000 });
    });
  }
  onUpdate(diningroom: Diningroom) {
    this._id = diningroom._id;
    this.manager = diningroom.manager;
    this.name = diningroom.name;
    this.street = diningroom.street;
    this.zip_code = diningroom.zip_code;
    this.street_address = diningroom.street_address;
    this.number = diningroom.number;
    this.settlement = diningroom.settlement;
  }

  hideBody() {
    if (this.active) {
      $('#dining_room_body').slideUp();
      this.active = false;
    } else {
      $('#dining_room_body').slideDown();
      this.active = true;
    }
  }
}
