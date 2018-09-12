import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  artistSearch = '';
  artistMusic: any[] = [];

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
  }

  searchMusic(): void {
    this.spotifyService.searchMusic(this.artistSearch)
    .subscribe(music => {
      this.artistMusic = music;
      console.log(this.artistMusic);
    });
  }

}
