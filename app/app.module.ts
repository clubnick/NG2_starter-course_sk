// placeholder for registration of modules / components

import { NgModule } from '@angular/core';
// for imports -- angular modules
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// for declarations - application components 
import { AppComponent } from './app.component';
import { UserProfileComponent } from './users/user-profile.component';
import { UserFormComponent } from './users/user-form.component';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule
  ],
  declarations: [ 
    AppComponent,
    UserProfileComponent,
    UserFormComponent
  ],
  
  bootstrap: [ AppComponent ]
})
export class AppModule {}