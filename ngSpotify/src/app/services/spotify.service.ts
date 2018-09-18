import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private clientID = '9f7681842f9146acb5b5b44199041a2b';
  private clientSecret = '01b48647f4064609ad67ddc273e3c9e6';
  private authenticaRedirectUrl = 'http://localhost:4200/authorized';

  constructor(private http: HttpClient) {

   }

   authenticate(): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin':  'true'
      })
    };


    // tslint:disable-next-line:max-line-length
    return this.http.get(`https://accounts.spotify.com/authorize?client_id=${this.clientID}&response_type=token&show_dialog=false&redirect_uri=${this.authenticaRedirectUrl}`);
   }

   searchMusic(searchStr: string, type: string = 'artist'): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization':  `Bearer ${ sessionStorage.getItem('access-token') }`
      })
    };

    return this.http.get(`https://api.spotify.com/v1/search?q=${searchStr}&type=${type}`, httpOptions);
   }

   getArtist(id: string): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization':  `Bearer ${ sessionStorage.getItem('access-token') }`
      })
    };

    return this.http.get(`https://api.spotify.com/v1/artists/${id}`, httpOptions);
  }

  getAlbums(artistId: string): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization':  `Bearer ${ sessionStorage.getItem('access-token') }`
      })
    };

    return this.http.get(`https://api.spotify.com/v1/artists/${artistId}/albums`, httpOptions);
  }
}
