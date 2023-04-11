import { Component } from '@angular/core';
import { GithubProjectsService } from '../service/github-projects.service';
import { Project } from '../project';
import { Observable } from 'rxjs/internal/Observable';
@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss']
})
export class ProjectsSectionComponent {
    data: Project[] =[];
    constructor(private githubProject:GithubProjectsService){
      
    }
    ngOnInit(){
      this.githubProject.getData().subscribe(
        (data:Project[]) => {console.log(data);
        this.data = data;
        }  
      )
    }
}
