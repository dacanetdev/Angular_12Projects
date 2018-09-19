import { Component, OnInit } from '@angular/core';
import { Artist } from '../models/artist';
import { Album } from '../models/album';
import { SpotifyService } from '../services/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  id: string;
  artist: Artist;
  albums: Album[];
  constructor(private _spotifyService: SpotifyService,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.paramMap
    .subscribe(res => {
      this.id = res['params'].id;
      this._spotifyService.getArtist(this.id)
      .subscribe(artist => {
        this.artist = artist;
      });

      this._spotifyService.getAlbums(this.id)
      .subscribe(albums => this.albums = albums.items);
    });
  }

}
