import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sub-task',
  templateUrl: './sub-task.component.html',
  styleUrls: ['./sub-task.component.css']
})
export class SubTaskComponent {

  subTaskArr:any = []
  
  subTask: string = ""


  @Input() task: any

  

  onSubmit(){
    if(this.task.length){
      
      console.log(this.task)
      let Obj = {
        taskName: this.task[0].title,
        taskId: this.task[0].id, 
        subTaskName: this.subTask
      }
      this.subTaskArr.push(Obj)
    }
  }


}
