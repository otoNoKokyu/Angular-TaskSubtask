import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {TaskSubtaskService} from './task-subtask.service'
import { SubTaskComponent } from './sub-task/sub-task.component';
import { TaskComponent } from './task/task.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: '', component: TaskComponent }, // Default route
  { path: 'subtask/:id', component: SubTaskComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SubTaskComponent,
    TaskComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule
  ],
  providers: [TaskSubtaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
