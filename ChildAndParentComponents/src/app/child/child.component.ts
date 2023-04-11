import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
 
constructor(){}
@Input()data:string='';
@Input()MyDataArray:string[]=[];
@Input()MyDataObj:any={};
}
