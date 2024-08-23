import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {Project} from '../interface/project'
import { PinnedItemsResponse } from '../interface/pinnedItemsResponse';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class GithubProjectsService {
  private apiUrl = 'https://api.github.com/graphql';
  private token = environment.gitHubAPI; 
  
  constructor(private http:HttpClient) { }
  getData(){
    const query = {
      query: `
      {
        user(login: "tomaszjader") {
          pinnedItems(first: 6, types: REPOSITORY) {
            nodes {
              ... on Repository {
                name
                owner {
                  login
                }
                url
                description
                openGraphImageUrl
                homepageUrl
                primaryLanguage {
                  name
                  color
                }
                stargazerCount
                forkCount
              }
            }
          }
        }
      }
      `
    };
    //let url ='https://gh-pinned-repos.egoist.dev/?username=tomaszjader';
    let url ='https://api.github.com/users/tomaszjader/repos'
    return this.http.post<PinnedItemsResponse>(this.apiUrl, query, {
      headers: {
        Authorization: `Bearer ${this.token}`,
        'Content-Type': 'application/json'
      }
  });
  }
}
