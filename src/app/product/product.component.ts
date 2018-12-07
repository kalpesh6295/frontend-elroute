import { Component, OnInit,Inject} from '@angular/core';
import {LOCAL_STORAGE,WebStorageService} from 'angular-webstorage-service' 
import {AuthService} from '../services/auth.service'
import { from } from 'rxjs';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private authService :AuthService,@Inject(LOCAL_STORAGE) private storage:WebStorageService) { }

  ngOnInit() {
  

  }

}
