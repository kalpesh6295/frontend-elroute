import { Component, OnInit, Inject,HostListener , Input} from '@angular/core';
import { AuthService } from '../services/auth.service';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {PostFeedComponent} from '../post-feed/post-feed.component'

import { User } from '../models/user';
import { Company } from '../models/company';




@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {
tab1 = true;
tab2 = false;
tab3 = false;
tab4 = false;
@Input() user:User
@Input() company:Company;
location:''
companyName:''
email:''
shortIntro:''
website:''
conatact:''
id:''
  constructor(@Inject(LOCAL_STORAGE) private storage:WebStorageService,  public authservice:AuthService, public router: Router,public dialog: MatDialog,public route:ActivatedRoute ) { 
    
}
  

  ngOnInit() {
    this.authservice.token = this.storage.get('token');
   
    this.authservice.showComapny().subscribe(res=>{
     console.log(JSON.parse(res['_body']).companies[0]);
    this.companyName= this.authservice.company.companyName=JSON.parse(res['_body']).companies[0].companyName;
    this.location= this.authservice.company.location=JSON.parse(res['_body']).companies[0].location;
     this.shortIntro= this.authservice.company.shortIntro=JSON.parse(res['_body']).companies[0].shortIntro;
    this.website= this.authservice.company.website=JSON.parse(res['_body']).companies[0].website;
    this.id=this.authservice.company._id=JSON.parse(res['_body']).companies[0]._id;
   
   })
  
  }
showPage1() {
this.tab1 = true;
this.tab2 = false;
this.tab3 = false;
this.tab4 = false;
}
showPage2() {
this.tab1 = false;
this.tab2 = true;
this.tab3 = false;
this.tab4 = false;
}
showPage3() {
  this.tab1 = false;
  this.tab2 = false;
  this.tab3 = true;
  this.tab4 = false;
}
showPage4() {
  this.tab1 = false;
  this.tab2 = false;
  this.tab3 = false;
  this.tab4 = true;
}

getFeed(){
  //this.router.navigate(['/post_feed']);
 this.dialog.open(PostFeedComponent, {
  width: '500px',height:'400px',
 })

}

 
gotoEditPage(){
 this.router.navigate(['/company-edit'],{queryParams:{id:this.id}});

}

follow(company){
this.authservice.Followers(company).subscribe(doc=>{
  console.log(doc)
})

}
}