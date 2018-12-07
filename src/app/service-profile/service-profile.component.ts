import { Component, OnInit ,Inject} from '@angular/core';
import { AuthService} from '../services/auth.service';
import {WebStorageService,LOCAL_STORAGE } from 'angular-webstorage-service';
import {ActivatedRoute} from '@angular/router'
import { from } from 'rxjs';
@Component({
  selector: 'app-service-profile',
  templateUrl: './service-profile.component.html',
  styleUrls: ['./service-profile.component.css']
})
export class ServiceProfileComponent implements OnInit {

  tab1 = true;
  tab2 = false;
  tab3 = false;
  tab4 = false;
    constructor(private authService:AuthService,@Inject(LOCAL_STORAGE) private storage: WebStorageService,private route:ActivatedRoute,private authservice:AuthService) { }

    ngOnInit() {
    
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

}
