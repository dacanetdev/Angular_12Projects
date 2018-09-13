import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.scss']
})
export class AuthenticateComponent implements OnInit {

  constructor(private spotifyService: SpotifyService, private router: Router) { }

  ngOnInit() {
    this.spotifyService.authenticate()
    .subscribe(res => {
      sessionStorage.setItem('authenticateUser', res);
      console.log(res);
      this.router.navigate(['authorized']);
    });
  }
}
