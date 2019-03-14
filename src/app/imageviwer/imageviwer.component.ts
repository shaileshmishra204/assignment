import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-imageviwer',
  templateUrl: './imageviwer.component.html',
  styleUrls: ['./imageviwer.component.css']
})
export class ImageviwerComponent implements OnInit {

  constructor(private activatedRoutes:ActivatedRoute,public appService:AppService,private router:Router) { }
  albumId:any;
  images:any;

  ngOnInit() {
    this.activatedRoutes.params.subscribe(params => {
      this.albumId=params.id
      console.log(params)
      this.appService.getAlbumsImages(this.albumId).then((data)=>{
        console.log(data,'albumss')
        this.images = data;
      })
    });

  }
  goBack(){
   return this.router.navigate(['']);
}
}
