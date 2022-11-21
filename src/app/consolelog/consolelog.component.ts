import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consolelog',
  templateUrl: './consolelog.component.html',
  styleUrls: ['./consolelog.component.css']
})
export class ConsolelogComponent {

  changeV1(val:any) {
    console.log(val.value)

}
}


