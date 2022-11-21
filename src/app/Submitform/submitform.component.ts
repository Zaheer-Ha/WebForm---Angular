import { Component } from '@angular/core';

@Component({
  selector: 'app-submitform',
  templateUrl: './submitform.component.html',
  styleUrls: ['./submitform.component.css']
})
export class SubmitformComponent {
city = [

  {id:1, name:"ABC"},
  {id:2, name:"DEF"},
  {id:3, name:"GHI"}

];

log(V1:any)

{

  console.log(V1.value);

}

onSubmit(frm:any)
{
  console.log(frm);
}

}
