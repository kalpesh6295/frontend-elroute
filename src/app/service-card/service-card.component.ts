import { Component, OnInit,Inject} from '@angular/core';
import { AuthService } from '../services/auth.service';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.css']
})
export class ServiceCardComponent implements OnInit {

  sevicesquery:any
  constructor(private authService:AuthService,@Inject(LOCAL_STORAGE) private storage: WebStorageService,private route:ActivatedRoute,private router:Router) { }
  
  ngOnInit() {
    this.authService.token = this.storage.get('token');
    this.authService.user.UserName = this.storage.get('UserName');
    this.authService.user.Email = this.storage.get('email');
    this.route.queryParams.subscribe(params=>{
      this.authService.GetServices(params.q).subscribe(results=>{
       console.log(results)
      })
     })
     
 
  }

}
