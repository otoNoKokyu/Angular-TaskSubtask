import { Component, OnInit } from '@angular/core';
import {slug} from "cuid"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = '';
  isSelected = false
  arr: any = []


  // selectedTask () : any {
  //   return this.arr.filter((e: { isSelected: any; })=>e.isSelected)
  // }
  onSubmit(){

    if(!this.title || this.title !== "Add a Task" ) {
      const id = slug()

      this.arr.push({id: id, title: this.title, isSelected: this.isSelected})
      this.title = ""
    // console.log(this.arr)

    }
    else {
      alert("please provide proper input")
    }
  }
  handleSlecting(item:any):void{
    this.arr.forEach((element: { id: any; isSelected: boolean; }) => {
      if(element.id === item.id) {
        element.isSelected = true
      }else{
        element.isSelected = false

      }
    });
  }

  ngOnInit(): void {
    
  }
}
