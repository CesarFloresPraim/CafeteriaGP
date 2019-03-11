import { Component, OnInit } from '@angular/core';
import { MaincafeService} from '../../modelService/maincafe.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-maincafe',
  templateUrl: './maincafe.component.html',
  styleUrls: ['./maincafe.component.css']
})
export class MaincafeComponent implements OnInit {
  constructor(private maincafeService: MaincafeService) { }

  ngOnInit() {
  }

  navigate(url) {
    this.maincafeService.navigateTo(url);
  }
}
