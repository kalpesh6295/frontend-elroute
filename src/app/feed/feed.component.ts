import { Component, OnInit ,Inject, Directive} from '@angular/core';
import { AuthService } from '../services/auth.service';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { FormGroup,FormBuilder } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import{PostFeedComponent} from '../post-feed/post-feed.component'
import *as $ from 'jquery'
import { EditPostComponent } from '../edit-post/edit-post.component';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Content } from '@angular/compiler/src/render3/r3_ast';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
 
 
  constructor(private authService:AuthService,@Inject(LOCAL_STORAGE) private storage: WebStorageService,private formBuilder: FormBuilder,public dialog: MatDialog,public router:Router,  public route:ActivatedRoute ) { 

    $(function(){
     $(document).scroll(function(){
         $('#wrapper').stop().animate({
             scrollTop : $(this).scrollTop()
         });            
     });
 });

  }
 
  companyName;
  feed:any[]=[]
  feedForm:FormGroup;
  postImage:File=null;
  insertImage(event){
  this.postImage = <File>event.target.files[0];
  }
  
  
  ngOnInit() {
    this.authService.token = this.storage.get('token');
    this.authService.user.UserName = this.storage.get('UserName');
    this.authService.user.Email = this.storage.get('email');
    console.log (this.authService.user.Email);
    this.authService.getFeed().subscribe(res=>{
    // console.log(this.authService.companyName);
    this.feed = res.json();
      console.log(this.feed)
    })
   
    this.feedForm=this.formBuilder.group({
      content:''
    })
 
     }
 
getFeed(){
  //this.router.navigate(['/post_feed']);
 this.dialog.open(PostFeedComponent, {
  width: '500px',height:'370px',
 })
}

editPost(r){
  console.log(r)
  this.router.navigate(['edit-post', {content:r.Content, image:r.Image, id:r._id }]);
}
valueChanged() { 

}
}
