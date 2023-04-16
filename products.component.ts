import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
products=[
 
  {"id": 3,
  "type":"premium",
    "title": "Handmade Fresh Table",
    "price": 687,
    "image": "https://placeimg.com/640/480/any?r=0.591926261873231",
    "description": "Andy shoes are designed to keeping in...",
    "available":"available"
},
{     'id':4,
"type":"total",
"title": "Handmade Fresh Table",
"price": 687,
      "image": "https://placeimg.com/640/480/any?r=0.591926261873231",
      "description": " Andy shoes are designed to keeping in...",
      "available":"not available"
}, 
 {   "id": 1,
 "type":"free",
    "title": "Change title",
    "price": 100,
    "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    "image": ["https://placeimg.com/640/480/any"],
    "available":"available"

},
 {     "id": 2,
       "type":"premium",
      "title": "Shoes",
      "price": 120,
      "image": "https://api.lorem.space/image/shoes?w=640&h=480&r=4508",
      "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
      "available":"not available"
  
    }];
    // getTotalProducts(){
    //      return this.products.length
    // }
    getFreeProducts(){
      return this.products.filter(products=>products.type==='free').length;
 }
 getPremiumProducts(){
  return this.products.filter(products=>products.type==='premium').length;
}
ProductsCoutRadioButton:string='All';
onRadioButtonSelectionChanged(data:string){
this.ProductsCoutRadioButton=data;
console.log(this.ProductsCoutRadioButton)
}
searchText:string='';
onSearchChanged(searchValue:string){
this.searchText=searchValue;
console.log(this.searchText)
}
}
