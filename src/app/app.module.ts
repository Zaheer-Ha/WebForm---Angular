import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { App, BankAccount } from './bank.component';
import { ConsolelogComponent } from './consolelog/consolelog.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { SubmitformComponent } from './Submitform/submitform.component';
import { CheckboxComponent } from './checkbox/checkbox.component';



@NgModule({
  declarations: [
    AppComponent,
    App,
    BankAccount,
    ConsolelogComponent,
      MyComponentComponent,
      SubmitformComponent,
      CheckboxComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
