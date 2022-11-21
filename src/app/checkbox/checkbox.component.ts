import { Component } from '@angular/core';

@Component({
  selector: 'chk',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent {

 log(V1:any)

{

  console.log(V1.value)

}

onSubmit(frm:any)
{
  console.log(frm)
}

}
