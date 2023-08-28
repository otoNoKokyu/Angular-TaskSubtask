import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-sub-task',
  templateUrl: './sub-task.component.html',
  styleUrls: ['./sub-task.component.css']
})
export class SubTaskComponent  {


  subTaskName: string = ""



  @Input() task: any = []
  @Output() outputFromChild: EventEmitter<any> = new EventEmitter();
  // subTaskArr: any = []




  onSubmit() {

    if (this.subTaskName !== "") {

      this.outputFromChild.emit({task: this.task, subTaskName: this.subTaskName});
      this.subTaskName = ""
    }
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   this.subTaskArr = this.task ?.subTasks || []
  //   console.log("oninit", this.task)
  // }


}


