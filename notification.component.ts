import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class='alert alert-success'[ngClass]="{fadeOut:displayNotification}">
    <p>This is my person story</p>
    <div class="close"><button class="btn" (click)="closeNotification()">x</button></div>
</div>`,
  styles: ['.notification-div{margin:10px,0px;padding:10px,20px;background-color:yellow;text-align:center}','p{font-size:22px}','.close{float:right;margin-top:-45px}',
'.fadeOut{visibility:hidden;oppacity:0;transition:visibility 0s 2s,oppacity 2s linear;}']
})
export class NotificationComponent {
displayNotification:boolean=false;
closeNotification(){
  this.displayNotification=true;
}
}
// [hidden]='displayNotification'