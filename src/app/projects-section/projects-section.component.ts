import { Component } from '@angular/core';
import { GithubProjectsService } from '../service/github-projects.service';
import { Project } from '../interface/project';
import { Observable } from 'rxjs/internal/Observable';
import {PinnedItemsResponse} from '../interface/pinnedItemsResponse'
import {Repository} from '../interface/repository'


@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss']
})

export class ProjectsSectionComponent {
    data: Repository[] =[];
    constructor(private githubProject:GithubProjectsService){
      
    }
    ngOnInit(){
      this.githubProject.getData().subscribe(
        (data:any) => {console.log(data);
        //this.data = data.data.user.pinnedItems.nodes;
        this.data = data.filter((repo: any) => repo.description && repo.homepage);
        }  
      )
    }
}
