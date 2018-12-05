import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { AuthService } from '../services/auth.service';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-homepage-login',
  templateUrl: './homepage-login.component.html',
  styleUrls: ['./homepage-login.component.css']
})
export class HomepageLoginComponent implements OnInit {
token;
SearchService:''

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService, public router: Router, private authservice:AuthService,private route:ActivatedRoute ) { }

  ngOnInit() {
     this.token = this.storage.get('token');
     console.log(this.token);
    if (!this.token) {
      this.router.navigate(['homepage']);

      }
     if (this.token) {
        this.router.navigate(['']);
      }

    
  }

  searchService(){
    if(this.SearchService !==null){
      this.router.navigate(['/service'],{queryParams:{q:this.SearchService}});
    }
   //logistics
  }
 
  searchProduct(){
    this.router.navigate(['/product'],{queryParams:{q:this.SearchService}});
  }
}
