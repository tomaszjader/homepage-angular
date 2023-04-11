import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-github-card',
  templateUrl: './github-card.component.html',
  styleUrls: ['./github-card.component.scss']
})
export class GithubCardComponent {
  @Input() description: string | undefined ='';
  @Input() project: string | undefined='';
  @Input() link: string | undefined='';
  @Input() website: string | undefined=''; 


}
