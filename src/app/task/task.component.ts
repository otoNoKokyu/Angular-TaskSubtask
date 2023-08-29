import { Component, OnInit } from '@angular/core';
import { TaskSubtaskService } from '../task-subtask.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent  implements OnInit{

  constructor(private taskService: TaskSubtaskService,private router: Router){}
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
  navigateToSubtask(id: string){
    this.router.navigate(['subtask', id])
  }



  ngOnInit(): void {
    this.arr = this.taskService.getTasks()
  }
}
