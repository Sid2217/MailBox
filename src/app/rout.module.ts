
import { MailComponent } from './components/mail/mail.component';
import { NgModule } from '@angular/core';
import {RouterModule , Routes} from '@angular/router';
import {OpenEmailComponent} from './components/open-email/open-email.component'


const routes : Routes = [
  {path : '' , component : MailComponent},
  {path : 'mail/:id' , component : OpenEmailComponent}
]

@NgModule({
  exports:[RouterModule],
  imports: [ RouterModule.forRoot(routes)]
})
export class RoutModule { }
