import { Component, OnInit } from '@angular/core';
import {Java} from   '../model/Java.model';
import { HttpClientService } from '.././service/http-client.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.css']
})
export class JavaComponent implements OnInit {
  //users: Array<Java>;
  users: Java;
  id:number;
  constructor(private httpClientService: HttpClientService,private _Router: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.id=this._Router.snapshot.params.id;
    console.log(this.id);
    this.httpClientService.getUsers(this.id).subscribe(
    //  response => this.handleSuccessfulResponse(response),
    response => this.handleSuccessfulResponse(response),
    );

  }
  handleSuccessfulResponse(response) {
    this.users = response;
  }
}
