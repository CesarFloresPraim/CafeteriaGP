import { Component, OnInit } from '@angular/core';
import { ProvidersService} from '../../modelService/providers.service';

import {NgForm} from '@angular/forms';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Providers} from '../../modelService/providers.model';
import * as $ from 'jquery';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css']
})
export class ProvidersComponent implements OnInit {
  provider: Providers;
  providers: Providers[];
  _id: string;
  name: string;
  telephone: string;
  email: string;
  rfc: string;
  zip_code: string;
  street: string;
  number: string;
  outter_number: string;
  neighborhood: string;
  constructor(private providersService: ProvidersService, private flashMessage: FlashMessagesService) { }

  ngOnInit() {
    this.fetchProviders();
    // $('#bootstrap-data-table').DataTable();

  }

  onSubmit(form: NgForm){
    if ( form.value._id == undefined){
      if( form.value.name == undefined){
        this.flashMessage.show('Name field is mandatory', { cssClass: 'alert-danger', timeout: 2000 });
      } else {
        this.providersService.postProvider(form.value).subscribe(res => {
          this.flashMessage.show('Provider saved succesfully!', { cssClass: 'alert-success', timeout: 2000 });
          console.log(res);
        });
      }

    } else {
      this.providersService.putProvider(form.value).subscribe(res => {
        this.flashMessage.show('Provider saved succesfully!', { cssClass: 'alert-success', timeout: 2000 });
        console.log(res);
      });
    }

  }
  fetchProviders() {
    this.providersService.getProviderList().subscribe((res: Providers[]) => {
      this.providers = res;
    });
  }
  onDelete(_id: string) {
    this.providersService.deleteProvider(_id).subscribe(res => {
      this.flashMessage.show('Product deleted succesfully!', { cssClass: 'alert-success', timeout: 2000 });
    });
  }
  onUpdate(prov: Providers) {
    this._id = prov._id;
    this.name =  prov.name;
    this.email = prov.email;
    this.telephone = prov.telephone;
    this.rfc = prov.rfc;
    this.zip_code = prov.zip_code;
    this.street = prov.street;
    this.number = prov.number;
    this.outter_number = prov.outter_number;
    this.neighborhood = prov.neighborhood;
  }
}
