import { Component, OnInit } from '@angular/core';
import { GitHubService } from '../services/github.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: any;
  repos: any[];
  username: string;

  constructor(private gitHubService: GitHubService) { }

  ngOnInit() {
  }

  searchUser() {
    this.gitHubService.getUser(this.username)
    .subscribe(user => {
      this.user = user;
      this.gitHubService.getRepos(this.username)
      .subscribe(repos => this.repos = repos);
    });
  }

}
