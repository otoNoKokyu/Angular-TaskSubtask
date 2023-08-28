import { Component, OnInit } from '@angular/core';
import { TaskSubtaskService } from '../task-subtask.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent  implements OnInit{

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



  ngOnInit(): void {
    this.arr = this.taskService.getTasks()
  }
}
