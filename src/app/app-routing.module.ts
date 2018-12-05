import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { HomepageLoginComponent } from './homepage-login/homepage-login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { ProductComponent } from './product/product.component';
import { CompanyComponent } from './company/company.component';
import { FeedComponent } from './feed/feed.component';
import { CompanyFormComponent } from './company-form/company-form.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ServiceProfileComponent } from './service-profile/service-profile.component';
import { ServiceCardComponent } from './service-card/service-card.component';
import { CompanyEditComponent } from './company-edit/company-edit.component';
import { SearchComponent } from './search/search.component';
import { PostFeedComponent } from './post-feed/post-feed.component';
import {EditPostComponent} from './edit-post/edit-post.component';


const routes: Routes = [
  {path: 'homepage', component: HomepageComponent },
  {path: '', component: HomepageLoginComponent},
  {path: 'user', component: UserProfileComponent},
  {path: 'bookmark', component: BookmarksComponent},
  {path: 'product', component: ProductComponent},
  {path: 'company', component: CompanyComponent},
  {path: 'feed', component: FeedComponent},
  {path: 'company_form', component: CompanyFormComponent},
  {path: 'company_profile', component: CompanyProfileComponent},
  {path: 'product_page', component: ProductPageComponent},
  {path: 'service_profile', component: ServiceProfileComponent},
  {path: 'service', component: ServiceCardComponent},
  {path:'company-edit',component:CompanyEditComponent},
  {path:'search',component:SearchComponent},
  {path:'post_feed',component:PostFeedComponent},
  {path:'edit-post',component:EditPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
