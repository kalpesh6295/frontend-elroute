import { Component, OnInit, Inject } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormControl } from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { tick } from '@angular/core/src/render3';
@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.css']
})
export class CompanyFormComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService,
  private _formBuilder: FormBuilder, public authService: AuthService) { }
service = false;
companyForm: FormGroup;
  ngOnInit() {
    this.authService.token = this.storage.get('token');
    this.authService.user.UserName = this.storage.get('UserName');
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.companyForm = this._formBuilder.group({
      category: [''],
      companyName: [''],
      location: [''],
      website: [''],
      companyType: [''],
      shortIntro: [''],
      yearEst: [''],
      address: [''],
      certification: [''],
      employeeSize: [''],
      about: ['']
    });
    
    
  }
  onService() {
    this.service = true;
  }
  onComapny() {
    this.service = false;
  }
  onSubmit() {
    //Change Backend, Database changes not working properly
   console.log(this.companyForm.value);
   var companyForm = this.companyForm.value;
   this.authService.addCompany(companyForm).subscribe(res => {
      console.log(JSON.parse(res['_body']));
     this.storage.set('companyName',JSON.parse(res['_body']).companyName);
     this.storage.set('location',JSON.parse(res['_body']).location);
     this.storage.set('address',JSON.parse(res['_body']).address);
     this.storage.set('website',JSON.parse(res['_body']).website);
     this.storage.set('shortIntro',JSON.parse(res['_body']).shortIntro);
     this.storage.set('employeeSize',JSON.parse(res['_body']).employeeSize);
     this.storage.set('companyType',JSON.parse(res['_body']).companyType);
     
   });
  }
  
  }



