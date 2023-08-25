import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-sub-task',
  templateUrl: './sub-task.component.html',
  styleUrls: ['./sub-task.component.css']
})
export class SubTaskComponent {

  // subTaskArr:any = []

  subTaskName: string = ""



  @Input() task: any = []
  @Output() outputFromChild: EventEmitter<any> = new EventEmitter();
  subTaskArr: any = []




  onSubmit() {

    if (this.subTaskName !== "") {

      this.outputFromChild.emit({id: this.task[0].id, subtask: this.subTaskName});
      this.subTaskName = ""
    }

    // if (this.subTaskName !== "") {
    //   this.subTaskArr.push(this.subTaskName)
    //   this.task[0].subTasks = this.subTaskArr
    // }
    // console.log(this.task[0].subTasks)

  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('OnChanges');
    // const { task } = changes
    // const { previousValue = [], currentValue = [] } = task
    // if (previousValue.length) {
    //   if (previousValue[0].id !== currentValue[0].id) {
    //     this.subTaskArr = []
    //   }
    // }
    this.subTaskArr = this.task[0] ? this.task[0].subTasks : []
    // console.log(this.task[0]?.subTasks);
  }


}


