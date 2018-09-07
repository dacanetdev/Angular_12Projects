import { Component, OnInit } from '@angular/core';
import { GitHubService } from '../services/github.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: any[];

  constructor(private gitHubService: GitHubService) { }

  ngOnInit() {
    this.gitHubService.getUser()
    .subscribe(user => this.user = user);
  }

}
