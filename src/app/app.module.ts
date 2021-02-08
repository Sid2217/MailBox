import { PostService } from './services/post.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MailComponent } from './components/mail/mail.component';
import { RoutModule } from './rout.module';
import { OpenEmailComponent } from './components/open-email/open-email.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    MailComponent,
    OpenEmailComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    RoutModule,
    
  ],
  providers: [PostService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
