import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-sub-task',
  templateUrl: './sub-task.component.html',
  styleUrls: ['./sub-task.component.css']
})
export class SubTaskComponent {

  // subTaskArr:any = []
  
  subTaskArr: any = []
  subTaskName: string = ""


  @Input() task: any

  

  onSubmit(){

    if(this.subTaskName!== ""){
      this.subTaskArr.push(this.subTaskName)
      this.task[0].subTasks = this.subTaskArr
    }
    console.log(this.task[0].subTasks)

  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('OnChanges');
    // if()
    console.log(changes);
  }


}
