import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  constructor(private authService :AuthService,@Inject(LOCAL_STORAGE) private storage:WebStorageService) { }
img1 = true;
img2;
img3;
  ngOnInit() {
    
    this.authService.token = this.storage.get('token');
    this.authService.user.UserName = this.storage.get('UserName');
    this.authService.user.Email = this.storage.get('email');
  this.authService.GetProduct().subscribe(res=>{
    console.log(res);
  })
  }
onSelectImg1() {
this.img1 = true;
this.img2 = false;
this.img3 = false;
}
onSelectImg2() {
  this.img1 = false;
  this.img2 = true;
  this.img3 = false;
  }
  onSelectImg3() {
    this.img1 = false;
    this.img2 = false;
    this.img3 = true;
    }
}
