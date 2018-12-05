import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css']
})
export class CompanyEditComponent implements OnInit {
  
  companyForm: FormGroup;
  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService,
  private _formBuilder: FormBuilder, public authService: AuthService,private route:ActivatedRoute,public router:Router) { }
  
  ngOnInit() {
    this.authService.token = this.storage.get('token');
    this.authService.user.UserName = this.storage.get('UserName');
    this.authService.user.Email = this.storage.get('email');
    console.log ( this.authService.user.Email);
     
    this.companyForm=this._formBuilder.group({
      companyName:'',
      shortIntro:'',
      address:'',
      companyType:'',
      employeeSize:'',
      website:''
   })

    this.companyForm.patchValue({
    companyName:this.authService.company.companyName=this.storage.get('companyName'),
    location:this.authService.company.location=this.storage.get(' location'),
       website:this.authService.company.website=this.storage.get('website'),
    shortIntro:this.authService.company.shortIntro=this.storage.get('shortIntro'),
        employeeSize:this.authService.company.employeeSize=this.storage.get('employeeSize'),
        address :this.authService.company.address=this.storage.get('address'),
        companyType:this.authService.company.companyType=this.storage.get('companyType')
        
    
})


  }
  SubmitonEdit(){
    console.log(this.companyForm.value);
   var companyForm = this.companyForm.value;
   this.authService.OneditCompany(companyForm).subscribe(res => {
      console.log(JSON.parse(res['_body']));
      this.storage.set('companyName',JSON.parse(res['_body']).companyName);
     this.storage.set('location',JSON.parse(res['_body']).location);
     this.storage.set('address',JSON.parse(res['_body']).address);
     this.storage.set('website',JSON.parse(res['_body']).website);
     this.storage.set('shortIntro',JSON.parse(res['_body']).shortIntro);
     this.storage.set('employeeSize',JSON.parse(res['_body']).employeeSize);
     this.storage.set('companyType',JSON.parse(res['body']).companyType);
     
   });
  // this.router.navigate(['/company_profile']);
  }
}


