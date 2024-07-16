import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Java } from '../../model/Java.model';
import { Router, ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  id:any;

  constructor(private httpClient:HttpClient) { }
  

 getUsers()
{
  
  return this.httpClient.get<any>('http://localhost:9090/api/tutorials');
}

fetchTopics1(id:any){
  // Call the API to fetch topics for the selected course
  // Replace with your API call
 return  this. httpClient.get<any>(`http://localhost:9090/api/tutorials/${id}`);
    
    
}


fetchTopicDetails(id:any){

return  this. httpClient.get<any>(`http://localhost:9090/api/tutorials/topics/${id}`);
}
}