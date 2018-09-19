import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import { Artist } from '../models/artist';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  artistSearch = '';
  searchResult: Artist[] = [];

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
  }

  searchMusic(): void {
    this.spotifyService.searchMusic(this.artistSearch)
    .subscribe(result => {
      this.searchResult = result.artists.items;
    });
  }

}
