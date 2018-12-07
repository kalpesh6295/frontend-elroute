import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MatDialogConfig} from '@angular/material';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
@Component({
  selector: 'app-other-header',
  templateUrl: './other-header.component.html',
  styleUrls: ['./other-header.component.css']
})
export class OtherHeaderComponent implements OnInit {

  constructor(public dialog: MatDialog,public router:Router,private route:ActivatedRoute, private authService:AuthService,@Inject(LOCAL_STORAGE) private storage:WebStorageService) { }
  searchResult:''
  ngOnInit() {
    this.authService.token = this.storage.get('token');
    this.authService.user.UserName = this.storage.get('UserName');
    this.authService.user.Email = this.storage.get('email');
  }
  showUser() {
    const dialogConfig = new MatDialogConfig();
  dialogConfig.autoFocus = true;
  dialogConfig.width = '24%';
  this.dialog.open(UserProfileComponent, dialogConfig);
  }
  gotoHomePage(){
    this.router.navigate(['homepage'])
  }
  searchService(){
    this.router.navigate(['/service',],{queryParams:{q:this.searchResult}})
    this.route.queryParams.subscribe(params=>{
         params[this.searchResult];
      })
    
  }
  searchProduct(){
    console.log('arjun')
  }
}
