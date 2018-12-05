import { Component, OnInit, Inject } from '@angular/core';
import {LOCAL_STORAGE , WebStorageService } from 'angular-webstorage-service';
import {Router } from '@angular/router';
import {AuthService} from '../services/auth.service';
import { EditUserComponent } from '../edit-user/edit-user.component';
import {MatDialog, MatDialogRef, MatDialogConfig} from '@angular/material';
import { LoginComponent } from '../auth/login/login.component';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
companyId;
username: any;
  constructor(@Inject(LOCAL_STORAGE) public storage: WebStorageService, public router: Router, private authService: AuthService,
  public dialog: MatDialog, public dialogRef: MatDialogRef<UserProfileComponent>) { }

  ngOnInit() {
    this.authService.token = this.storage.get('token');
   this.username = this.storage.get('UserName');
   
  }
  onEdit() {
    this.dialogRef.close(LoginComponent);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '30%';
    this.dialog.open(EditUserComponent, dialogConfig);
  }
onLogout() {
  this.storage.remove('token');
  this.authService.token = null;
  this.router.navigate(['homepage']);
  this.dialogRef.close(UserProfileComponent);
}
}

