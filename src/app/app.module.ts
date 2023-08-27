import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {TaskSubtaskService} from './task-subtask.service'
import { SubTaskComponent } from './sub-task/sub-task.component';

@NgModule({
  declarations: [
    AppComponent,
    SubTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TaskSubtaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
