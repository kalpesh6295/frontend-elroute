import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MatDialogConfig} from '@angular/material';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-other-header',
  templateUrl: './other-header.component.html',
  styleUrls: ['./other-header.component.css']
})
export class OtherHeaderComponent implements OnInit {

  constructor(public dialog: MatDialog,public router:Router) { }

  ngOnInit() {
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
}
