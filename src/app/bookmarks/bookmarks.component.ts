import { Component, OnInit, Inject } from '@angular/core';
import{AuthService} from '../services/auth.service'
import { from } from 'rxjs';
import { LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {

  constructor(private authService :AuthService,@Inject(LOCAL_STORAGE) private storage:WebStorageService ) { }

  ngOnInit() {
    this.authService.token = this.storage.get('token');
    
  }

}
