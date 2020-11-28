import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Java } from '../../model/Java.model';
import { Router, ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
id :number;
  constructor(private httpClient:HttpClient) { }
  

 getUsers(Id)
{
  
  return this.httpClient.get<Java[]>('http://localhost:8080/Java/get/?id='+Id);
}

}