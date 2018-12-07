import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
token;
  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService, public router: Router, private route:ActivatedRoute ) {

   }
   searchResult:'';
   showUrldata:''
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

  search(event){
    if(event.keyCode===13){
      this.router.navigate(['./search',],{queryParams:{q:this.searchResult}})
    }
    this.route.queryParams.subscribe(params=>{
      let result=params[this.searchResult];
      console.log(result);
    })
  }
  
}
