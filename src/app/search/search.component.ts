import { Component, OnInit,Inject } from '@angular/core';
import {AuthService} from '../services/auth.service';

// import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-search',
   templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private authService:AuthService,private router:ActivatedRoute) {

    
   }
  

 mydata:any[]=[]
    ngOnInit() {
    this.router.queryParams.subscribe(params=>{
   this.authService.searchResult(params.q).subscribe(results=>{
     this.mydata=results.json();
         // console.log(params.q);
          console.log(this.mydata);  

   })
  })
}


}
