import { Component, OnInit } from '@angular/core';
import {Java} from   '../model/Java.model';
import {Topic} from   '../model/Topic.model';
import {HttpClientService } from '../service/http-client.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.css']
})
export class JavaComponent implements OnInit {
  id:any;
  topics: Topic;

  constructor(private route: ActivatedRoute,private tutorialService: HttpClientService) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.paramMap.get('id');
    this.fetchTopics( this.id);
  }
  fetchTopics(id:any): void {
    // Call the API to fetch topics for the selected course
    // Replace with your API call
    this.tutorialService.fetchTopics1(id)
      .subscribe(response => {
        this.topics = response;
      });
  }
  

 
  }

