import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';
import { NomeComponent } from './components/nome/nome.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    NomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }