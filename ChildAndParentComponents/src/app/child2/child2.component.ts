import { Component ,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component {

@Output() public ChildEvent=new EventEmitter();
FireEvent()
{
  this.ChildEvent.emit("Welcome to Child 2 Component");
}
}
