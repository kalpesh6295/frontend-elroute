import { Component, OnInit,Inject } from '@angular/core';
import { ScrollEvent } from 'ngx-scroll-event';
import {MatDialog, MatDialogRef, MatDialogConfig} from '@angular/material';
import { SignupComponent } from '../auth/signup/signup.component';
import { LoginComponent } from '../auth/login/login.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {
showHeader = false;
token;
searchResult:''
public href: string = "";
  constructor(public dialog: MatDialog, @Inject(LOCAL_STORAGE) private storage:WebStorageService, private route:ActivatedRoute,private router:Router) { }
username:''
  ngOnInit() {
  }
  public handleScroll(event: ScrollEvent) {
    if (event.isReachingBottom) {
      this.showHeader = true;
    }
    if (event.isReachingTop) {
      this.showHeader = false;
    }
    this.username = this.storage.get('UserName');

  }

  openDialog() {

  const dialogConfig = new MatDialogConfig();
  dialogConfig.autoFocus = true;
  dialogConfig.width = '30%';
  this.dialog.open(SignupComponent, dialogConfig);
  }

  onLogin() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '30%';
    this.dialog.open(LoginComponent, dialogConfig);
  }
  showUser() {
    const dialogConfig = new MatDialogConfig();
  dialogConfig.autoFocus = true;
  dialogConfig.width = '24%';
  this.dialog.open(UserProfileComponent, dialogConfig);
  }

  
}

