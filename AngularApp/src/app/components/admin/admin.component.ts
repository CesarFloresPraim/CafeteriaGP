/*
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../../modelService/user.model';
import { UserService } from '../../modelService/user.service';

@Component({templateUrl: 'admin.component.html'})
export class AdminComponent implements OnInit {
    users: User[] = [];

    constructor(private userService: UserService) {}

    ngOnInit() {
        this.userService.getAll().pipe(first()).subscribe(users => { 
            this.users = users; 
        });
    }
}*/
