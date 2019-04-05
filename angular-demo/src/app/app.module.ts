import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminUserListComponent } from './components/admin-user-list/admin-user-list.component';
import { AdminUserSingleComponent } from './components/admin-user-single/admin-user-single.component';
import { AdminUserAddComponent } from './components/admin-user-add/admin-user-add.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminUserListComponent,
    AdminUserSingleComponent,
    AdminUserAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
