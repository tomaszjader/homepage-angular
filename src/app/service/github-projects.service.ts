import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {Project} from '../project'
@Injectable({
  providedIn: 'root'
})
export class GithubProjectsService {

  constructor(private http:HttpClient) { }
  getData(){
    let url ='https://gh-pinned-repos.egoist.dev/?username=tomaszjader';
    return this.http.get<Project[]>(url);
  }
}
