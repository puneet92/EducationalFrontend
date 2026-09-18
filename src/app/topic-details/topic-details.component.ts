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
  selectedSubtopic:any;

  constructor(private route: ActivatedRoute,private tutorialService: HttpClientService) { }

  ngOnInit(): void {

    this.id= this.route.snapshot.paramMap.get('id');
    this.fetchTopicDetails( this.id);
  }
  fetchTopicDetails(id:any): void {
    // Call the API to fetch subtopics for the selected topic
    this.tutorialService.fetchSubTopicsByTopicId(id)
      .subscribe(response => {
        this.topics1 = { subtopics: response };
        // Auto-select first subtopic if available
        if (this.topics1?.subtopics && this.topics1.subtopics.length > 0) {
          this.selectedSubtopic = this.topics1.subtopics[0];
        }
      });
  }

  selectSubtopic(subtopic: any): void {
    this.selectedSubtopic = subtopic;
  }
}