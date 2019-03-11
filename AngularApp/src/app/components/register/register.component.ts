import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterService} from '../../modelService/register.service';
import { User} from '../../modelService/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private registerService: RegisterService) { }
  ngOnInit() {
  }

  onSubmit(form: NgForm) {

    this.registerService.postUser(form.value).subscribe(res => {
      console.log(res);
    });
  }

}
