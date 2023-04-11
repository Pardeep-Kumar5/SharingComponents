import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ChildAndParentComponents';
  Name="Pardeep Kumar";

  ChangeData(){
    this.Name="Nikhil Patial"
  }
  fruits=["Apple","Banana","Mango","Orage"];
  Obj={
    Name:"Pardeep Kumar",
    Age:"20",
    Email:"pardeepkumar63281@gmail.com"
  }
  public message="";
}
