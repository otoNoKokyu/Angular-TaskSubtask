import { Component, OnInit } from '@angular/core';
import {slug} from "cuid"
import { TaskSubtaskService } from './task-subtask.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private taskService: TaskSubtaskService){}
  title = '';
  arr: any = []

  onSubmit(){

    if(this.title && this.title !== "Add a Task" ) {

      this.taskService.addTask(this.title)
      this.title =''

    }
    else {
      alert("please provide proper input")
    }
  }
  handleSlecting(item:any):void{
    this.taskService.handleSlecting(item)
  }
  receiveChildData(data: any): void{
  
    const { task, subTaskName} = data
    this.taskService.addSubTask(task, subTaskName)


  }
  childSubtask(){
    console.log(this.taskService.SelctedTask())
    return this.taskService.SelctedTask()
  }

  ngOnInit(): void {
    this.arr = this.taskService.getTasks()
  }
}
