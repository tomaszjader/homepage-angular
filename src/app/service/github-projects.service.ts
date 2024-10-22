import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {Project} from '../interface/project'
import { PinnedItemsResponse } from '../interface/pinnedItemsResponse';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class GithubProjectsService {
  private apiUrl ='https://api.github.com/users/tomaszjader/repos'
  
  
  constructor(private http:HttpClient) { }
  getData(){
   
    let url ='https://api.github.com/users/tomaszjader/repos'
    return this.http.get<any>(this.apiUrl,  {
      headers: {
        'Content-Type': 'application/json'
      }
  });
  }
}
