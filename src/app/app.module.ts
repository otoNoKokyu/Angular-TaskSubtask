import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {TaskSubtaskService} from './task-subtask.service'
import { SubTaskComponent } from './sub-task/sub-task.component';
import { TaskComponent } from './task/task.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
const routes: Routes = [
  { path: '', component: LoginComponent }, // Default route
  { path: 'task', component: TaskComponent }, // Default route
  { path: 'subtask/:id', component: SubTaskComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SubTaskComponent,
    TaskComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TaskSubtaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
