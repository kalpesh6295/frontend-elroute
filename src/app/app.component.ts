import { Component, Inject, OnInit } from '@angular/core';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import {AuthService} from '../app/services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'frontend';
  token;
  constructor( @Inject(LOCAL_STORAGE) private storage: WebStorageService, private authService: AuthService,) {

  }
  ngOnInit() {
    this.token = this.storage.get('token');
    
  }
  


  

}



