import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ProductService} from '../../modelService/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {
  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.productService.postProduct(form.value).subscribe(res => {
      console.log(res);
    });
  }
}
