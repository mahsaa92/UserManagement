import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UserComponent } from "./user/user.component";
import { UserListComponent } from "./user-list/user-list.component";
import { UserService } from "./shared/user.service";
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent, UserComponent, UserListComponent],
  imports: [BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
