import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {TopicDetails} from   '../model/TopicDetails.model';
import {HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-topic-details',
  templateUrl: './topic-details.component.html',
  styleUrls: ['./topic-details.component.css']
})
export class TopicDetailsComponent implements OnInit {
  id:any;
  topics1:any;

  constructor(private route: ActivatedRoute,private tutorialService: HttpClientService) { }

  ngOnInit(): void {

    this.id= this.route.snapshot.paramMap.get('id');
    this.fetchTopicDetails( this.id);
  }
  fetchTopicDetails(id:any): void {
    // Call the API to fetch topics for the selected course
    // Replace with your API call
    this.tutorialService.fetchTopicDetails(id)
      .subscribe(response => {
        this.topics1 = response;
      });
}
}