import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ButtomsModule } from './buttoms/buttoms.module';
import { HeadModule } from './head/head.module';
import { TaskListModule } from './task-list/task-list.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ButtomsModule,
    HeadModule,
    TaskListModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
