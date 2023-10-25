import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { FormsModule } from '@angular/forms';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskViewComponent } from './components/task-view/task-view.component';
import { CurrencyPipe } from './pipes/currency.pipe';
import { TaskTableComponent } from './components/task-table/task-table.component';
import { TaskStatusDirective } from './directives/task-status.directive';
import { TaskFormReactiveComponent } from './components/task-form-reactive/task-form-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskFormComponent,
    TaskListComponent,
    TaskViewComponent,
    CurrencyPipe,
    TaskTableComponent,
    TaskStatusDirective,
    TaskFormReactiveComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
