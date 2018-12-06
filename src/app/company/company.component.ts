import { Component, OnInit, Inject } from '@angular/core';
import {AuthService} from '../services/auth.service'
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import{ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor( private authService:AuthService,@Inject(LOCAL_STORAGE) private storage:WebStorageService,private router:ActivatedRoute) { }
  mydata:any[]=[]
  ngOnInit() 
  {
    this.authService.token = this.storage.get('token');
    this.router.queryParams.subscribe(params=>{
      this.authService.searchResult(params.q).subscribe(results=>{
        this.mydata=results.json();
            // console.log(params.q);
             console.log(this.mydata); 
      })
     })
  }
  

}
