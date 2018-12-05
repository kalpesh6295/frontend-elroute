import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MatDialogConfig} from '@angular/material';
import {AuthService} from '../../services/auth.service';
import { FogotPasswordComponent } from '../fogot-password/fogot-password.component';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import {LOCAL_STORAGE , WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService,
   public dialog: MatDialog, public dialogRef: MatDialogRef<LoginComponent>, public authService: AuthService,
     public router: Router) { }
     user;

  ngOnInit() {
  }
onforgotPassword() {
  this.dialogRef.close(LoginComponent);
  const dialogConfig = new MatDialogConfig();
  dialogConfig.autoFocus = true;
  dialogConfig.width = '30%';
  this.dialog.open(FogotPasswordComponent, dialogConfig);
}
onSubmit(form: NgForm) {
 this.authService.login(form.value).subscribe(res => {
   console.log(res)
  this.authService.token = res.headers.get('x-auth');
   this.storage.set('token', this.authService.token);
   this.storage.set('UserName', JSON.parse(res['_body']).UserName);
   this.authService.user.UserName = JSON.parse(res['_body']).UserName;
   this.storage.set('email', JSON.parse(res['_body']).Email);
   this.authService.user.Email = JSON.parse(res['_body']).Email;
   this.user = res;
   console.log(this.authService.user.UserName);
   this.authService.user = this.user;
 
   this.dialogRef.close(LoginComponent);
   this.router.navigate(['']);
 });
 
}

}
