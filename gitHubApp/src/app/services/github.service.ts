import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitHubService {

  private username = 'dacanetdev';
  private client_id = '17203';
  private client_secret = '4f:9e:12:1c:14:5c:38:69:3c:40:04:05:47:36:d4:21:71:e2:10:97';
  constructor(private http: HttpClient) { }

  getUser(): any {
    return this.http.get(`http://api.github.com/users/${this.username}?client)id=${this.client_id}
    &client_secret=${this.client_secret}`);
  }
}
