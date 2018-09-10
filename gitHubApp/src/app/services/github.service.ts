import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitHubService {

  private username = 'dacanetdev';
  private client_id = 'aa22b31f39203887b691';
  private client_secret = 'ce37c38ee5a16f3bb56bd3c24e9a985159fb1378';
  constructor(private http: HttpClient) { }

  getUser(username: string = this.username): Observable<any> {
    return this.http.get(`http://api.github.com/users/${username}?client_id=${this.client_id}
    &client_secret=${this.client_secret}`);
  }

  getRepos(username: string = this.username): Observable<any> {
    return this.http.get(`http://api.github.com/users/${username}/repos?client_id=${this.client_id}
    &client_secret=${this.client_secret}`);
  }
}
