import { Component, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  title = 'GocSeaFood';
  public isCollapsed = true;
  ngOnInit() {
    var WOW: any;
    new WOW().init();
  }
  }
  
  


