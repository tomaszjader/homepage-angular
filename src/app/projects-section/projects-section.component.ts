import { Component } from '@angular/core';
import { GithubProjectsService } from '../service/github-projects.service';
import { Project } from '../interface/project';
import { Observable } from 'rxjs/internal/Observable';


@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss'],
})
export class ProjectsSectionComponent {
  data: Project[] = [];
  constructor(private githubProject: GithubProjectsService) {}
  ngOnInit() {
    this.githubProject.getData().subscribe((data: Project[]) => {
      if (data) {
        this.data = data.filter(
          (repo: Project) => repo.description && repo.homepage
        );
      }
    });
  }
}
