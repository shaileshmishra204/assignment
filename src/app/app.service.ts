import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable()
export class AppService {

  constructor(public http: HttpClient) { }

  baseUrl="http://localhost:3000";

  data() {
   
    return this.http.get(`${this.baseUrl}/users`).toPromise();
  }
  getAlbums(id) {
   
    return this.http.get(`${this.baseUrl}/albums?userID=${id}`).toPromise();
  }
  getAlbumsImages(id) {
   
    return this.http.get(`${this.baseUrl}/photos?albumId=${id}`).toPromise();
  }
}
