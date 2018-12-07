import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-tab-header',
  templateUrl: './tab-header.component.html',
  styleUrls: ['./tab-header.component.css']
})
export class TabHeaderComponent implements OnInit {

  constructor(private authService:AuthService,private router:Router,@Inject(LOCAL_STORAGE) private storage:WebStorageService) { }
token
  ngOnInit() {
    this.authService.token = this.storage.get('token');

  }
  gotoService(){
  
  }
   
  
}
