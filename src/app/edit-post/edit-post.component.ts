import { Component, OnInit,Inject,Input,Output,EventEmitter } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import {Router, ActivatedRoute} from '@angular/router';
import {MatDialog} from '@angular/material'
import {PostFeedComponent} from '../post-feed/post-feed.component'

import { Content } from '@angular/compiler/src/render3/r3_ast';

declare var $:any
@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  @Input() event: Event;
  
 public  EditfeedForm:FormGroup;
 imageurl:any;
 contents:any;
 imageSrc:any
 cont:any
  postImage:File=null;
  insertImage(event){
  this.postImage = <File>event.target.files[0];
  if (event.target.files && event.target.files[0]) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = e => this.imageSrc = reader.result;
    reader.readAsDataURL(file);
}
  }
  constructor(private formBuilder:FormBuilder, private authService:AuthService,@Inject(LOCAL_STORAGE) private storage: WebStorageService, public router:Router,public dialog: MatDialog,private route:ActivatedRoute) { }

  postId;
  ngOnInit() {
    this.authService.token = this.storage.get('token');
    this.authService.user.UserName = this.storage.get('UserName');
    this.authService.user.Email = this.storage.get('email');

    this.route.paramMap.subscribe(params=>{
    this.cont= params.get('content')
      this.imageSrc=params.get('image')
      this.postId = params.get('id')
      })
      this.EditfeedForm= this.formBuilder.group({
        content:this.cont
        
    });
  }

//   displayCounter() {
//     console.log();
   
// }
onSubmit(){
  console.log(this.EditfeedForm.value);
  const patchdata:FormData=new FormData();
  patchdata.append('Image',this.postImage);
  patchdata.append('Content',this.EditfeedForm.value.content)
  this.authService.onEditPost(patchdata,this.postId).subscribe(res=>{
    console.log(res)
  })
}

}
