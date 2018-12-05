import { Component, OnInit, Inject } from '@angular/core';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import {AuthService} from '../services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService, public authService: AuthService) { }

  ngOnInit() {
    this.authService.token = this.storage.get('token');
    this.authService.user.UserName = this.storage.get('UserName');
    this.authService.user.Email = this.storage.get('email');
    console.log (  this.authService.user.Email);

  }
onEdit(form: NgForm) {
  this.authService.onEditUser(form.value).subscribe(res => {
     console.log(res);
     this.storage.set('UserName', JSON.parse(res['_body']).UserName);
     this.authService.user.UserName = JSON.parse(res['_body']).UserName;
     this.storage.set('email', JSON.parse(res['_body']).Email);
     this.authService.user.Email = JSON.parse(res['_body']).Email;
  });
}
}
