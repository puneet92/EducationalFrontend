import { Component, OnInit } from '@angular/core';

import {HttpClientService } from '../service/http-client.service';
import { Java } from '../model/Java.model';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  tutorials: Java;

  constructor(private tutorialService: HttpClientService) { }

  ngOnInit(): void {
    this.tutorialService.getUsers().subscribe(response => {
      console.log(response);
      this.tutorials = response;
    });

   // console.log(this.tutorials);
  }

}
