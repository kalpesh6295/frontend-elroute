import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ScrollEventModule } from 'ngx-scroll-event';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageLoginComponent } from './homepage-login/homepage-login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SignupComponent } from './auth/signup/signup.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatStepperModule} from '@angular/material/stepper';
import { LoginComponent } from './auth/login/login.component';
import { FogotPasswordComponent } from './auth/fogot-password/fogot-password.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { OtherHeaderComponent } from './other-header/other-header.component';
import {HttpModule} from '@angular/http';
import { TabHeaderComponent } from './tab-header/tab-header.component';
import { ProductComponent } from './product/product.component';
import { CompanyComponent } from './company/company.component';
import { FeedComponent } from './feed/feed.component';
import { CompanyFormComponent } from './company-form/company-form.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatButtonModule} from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ServiceProfileComponent } from './service-profile/service-profile.component';
import { ServiceCardComponent } from './service-card/service-card.component';
import { AuthService } from './services/auth.service';
import { StorageServiceModule} from 'angular-webstorage-service';
import { EditUserComponent } from './edit-user/edit-user.component';
import { CompanyEditComponent } from './company-edit/company-edit.component';
import { SearchComponent } from './search/search.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import { PostFeedComponent } from './post-feed/post-feed.component';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';
import {StickyModule} from 'ng2-sticky-kit';
import { EditPostComponent } from './edit-post/edit-post.component'
import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    HomepageComponent,
    FooterComponent,
    HomepageLoginComponent,
    SignupComponent,
    LoginComponent,
    FogotPasswordComponent,
    BookmarksComponent,
    UserProfileComponent,
    OtherHeaderComponent,
    TabHeaderComponent,
    ProductComponent,
    CompanyComponent,
    FeedComponent,
    CompanyFormComponent,
    CompanyProfileComponent,
    ProductPageComponent,
    ServiceProfileComponent,
    ServiceCardComponent,
    EditUserComponent,
    CompanyEditComponent,
    SearchComponent,
    PostFeedComponent,
    EditPostComponent,
  
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollEventModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRadioModule,
    StorageServiceModule,
    MatCardModule,
    MatGridListModule,
    FlexLayoutModule,
    MatPaginatorModule,
    MatFormFieldModule,
    ScrollDispatchModule,
    StickyModule,
    MatTooltipModule
    
    

    ],
  entryComponents: [
  SignupComponent,
  LoginComponent,
  FogotPasswordComponent,
  EditUserComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [ AuthService],
  bootstrap: [AppComponent,

]
})
export class AppModule { }
