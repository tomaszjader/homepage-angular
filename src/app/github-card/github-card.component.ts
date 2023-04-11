import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-github-card',
  templateUrl: './github-card.component.html',
  styleUrls: ['./github-card.component.scss']
})
export class GithubCardComponent {
  @Input() description?: string ='';
  @Input() project?: string ='';
  @Input() link?: string ='';
  @Input() website?: string =''; 


}
