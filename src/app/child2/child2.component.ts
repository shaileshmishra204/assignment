import { Component, OnChanges, Input } from '@angular/core';
import{AppService} from '../app.service'
import {Router} from "@angular/router"

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})

export class Child2Component implements OnChanges {
  albums: any;
  @Input('d') d;

  constructor(private appService:AppService,private router:Router) {


  }
  ngOnChanges() {
    this.appService.getAlbums(this.d).then((data)=>{
      this.albums =data;
    })

  }
  navigateToAlbumView(album){
    this.router.navigate([`imageview/${album.id}`])
  }



}
