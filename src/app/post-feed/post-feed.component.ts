import { Component, OnInit ,Inject, ViewChild, EventEmitter, Output,Input} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms'
import { from } from 'rxjs';
import { AuthService } from '../services/auth.service';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material'
import { ReadVarExpr } from '@angular/compiler';


@Component({
  selector: 'app-post-feed',
  templateUrl: './post-feed.component.html',
  styleUrls: ['./post-feed.component.css']
})
export class PostFeedComponent implements OnInit {
  @Output() valueChange = new EventEmitter();
  
  counter = 0;

   
  imageSrc:any
  constructor(private formBuilder:FormBuilder, private authService:AuthService,@Inject(LOCAL_STORAGE) private storage: WebStorageService, public router:Router,public dialog: MatDialog) {

    
   }

 feedForm:FormGroup;
 postData:any
  postImage:File=null;
  insertImage(event:any){
  this.postImage = <File>event.target.files[0];
  if (event.target.files && event.target.files[0]) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = e => this.imageSrc = reader.result;
    reader.readAsDataURL(file);
}
  

}
 
  ngOnInit() {
    
    this.feedForm= this.formBuilder.group({
      content: [''],
      
  });

  this.authService.token = this.storage.get('token');
    this.authService.user.UserName = this.storage.get('UserName');
    this.authService.user.Email = this.storage.get('email');
    // console.log(this.storage.get('token'))
    // console.log(this.storage.get('UserName'))
  }

  onSubmit(){
    console.log(this.feedForm.value);
    const postData:FormData = new  FormData();
    postData.append('Image', this.postImage);
    postData.append('Content',this.feedForm.value.content);
    this.authService.addFeed(postData).subscribe(res=>{
    console.log(res);
   
   });
  
}
// valueChanged(event:any) { 

// }
displayData() {
  
}

}
