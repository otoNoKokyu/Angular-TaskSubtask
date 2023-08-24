import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = '';
  arr: any = []

  onSubmit(){

    if(!this.title || this.title !== "Add a Task" ) {
      this.arr.push(this.title)
      this.title = ""
    console.log(this.arr)

    }
    else {
      alert("please provide proper input")
    }
  }

  ngOnInit(): void {
    
  }
}
