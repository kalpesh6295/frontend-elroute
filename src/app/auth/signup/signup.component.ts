import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MatDialogConfig} from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor( @Inject(LOCAL_STORAGE) private storage: WebStorageService , public dialog: MatDialog,
   public dialogRef: MatDialogRef<SignupComponent>,
   public router: Router,
     public authService: AuthService) { }

  ngOnInit() {
  }
  onSubmit( form: NgForm) {
   
    this.authService.signup(form.value).subscribe(res => {
      this.authService.token =  res.headers.get('x-auth');
      console.log( this.authService.token);
      this.storage.set('token', this.authService.token);
      this.storage.set('UserName', JSON.parse(res['_body']).UserName);
      this.authService.user.UserName = JSON.parse(res['_body']).UserName;
      this.storage.set('email', JSON.parse(res['_body']).Email);
      this.authService.user.Email = JSON.parse(res['_body']).Email;
     console.log(res);
 
    });
    this.dialogRef.close(SignupComponent);
    this.router.navigate(['']);
   }
  onLogin() {
    this.dialogRef.close(SignupComponent);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '30%';
    this.dialog.open(LoginComponent, dialogConfig);

  }

}
