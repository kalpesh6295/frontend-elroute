import { Component, OnInit, Inject } from '@angular/core';
import {AuthService} from '../services/auth.service'
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor( private authService:AuthService,@Inject(LOCAL_STORAGE) private storage:WebStorageService) { }

  ngOnInit() 
  {
  }

}
