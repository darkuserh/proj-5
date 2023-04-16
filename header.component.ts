import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {

  slogan:string="Shop till you drop!";
  source:string='/assets/photos.avif'
  getSlogan(){
    return 'this is my first project from  angular'
  }

}
