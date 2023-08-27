import { Injectable } from '@angular/core';
import {slug} from "cuid"
interface Task {
  id: string,
  title: string,
  isSelected: boolean,
  subTasks: string[] 

}

@Injectable({
  providedIn: 'root'
})



export class TaskSubtaskService {

  constructor() { }

  tasks : Task[] = []

  addTask(title: string) {
    let task : Task = {
      id: slug(),
      title: title,
      isSelected: false,
      subTasks: []
    }
    this.tasks.push(task)
  }
  getTasks(): Task[]{
    return this.tasks
  }
  addSubTask(task: Task, subTask: string){
    this.tasks.forEach(function(e:Task){
      if(e.id === task.id){
        e.subTasks.push(subTask)
      }
    })


    
  }
  handleSlecting(item: Task):void{
    this.tasks.forEach((element: { id: any; isSelected: boolean; }) => {
      if(element.id === item.id) {
        element.isSelected = true
      }else{
        element.isSelected = false

      }
    });
  }
  SelctedTask(): Task {
    return this.tasks.filter((e: { isSelected: any; })=>e.isSelected)[0]
  }
}
