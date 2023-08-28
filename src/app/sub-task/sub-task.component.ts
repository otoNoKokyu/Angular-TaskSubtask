import { Component, OnInit } from '@angular/core';
import {TaskSubtaskService} from "../task-subtask.service"
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sub-task',
  templateUrl: './sub-task.component.html',
  styleUrls: ['./sub-task.component.css']
})
export class SubTaskComponent implements OnInit  {

  taskId = ''
  subTaskName: string = ""
  subTaskArr : [] = []

  constructor(private taskSubTaskService: TaskSubtaskService, private route: ActivatedRoute){}


  onSubmit() {

    if (this.subTaskName !== "") {

      // this.outputFromChild.emit({task: this.task, subTaskName: this.subTaskName});
      this.taskSubTaskService.addSubTask(this.taskId,this.subTaskName)
      this.subTaskName = ""
    }
  }

  ngOnInit(): void {
    // this.route.params.subscribe(params => {
    //   this.taskId = +params['taskId'];
    // });
    this.route.params.subscribe(params=>{
      console.log(params)
      this.taskId = params['id']
      this.subTaskArr = this.taskSubTaskService.findSubTaskById(params['id'] )

    })
    
  }


}


