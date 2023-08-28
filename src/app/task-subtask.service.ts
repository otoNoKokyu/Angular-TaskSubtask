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
  addSubTask(taskId: string, subTask: string){
    this.tasks.forEach(function(e:Task){
      if(e.id === taskId){
        e.subTasks.push(subTask)
      }
    })


    
  }
  findSubTaskById(id: string): any{
    const tasksArr = this.tasks.find(e=>e.id===id) || {subTasks: []}
    return tasksArr.subTasks 

  }
}
