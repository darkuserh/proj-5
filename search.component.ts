import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
searchValue:string='Iphone';
changesearchValue(eventDate:Event){
// console.log((<HTMLInputElement>eventDate.target).value);
this.searchValue=(<HTMLInputElement>eventDate.target).value;

}
enteredSearchValue:string='';
@Output()
searchTextChanged:EventEmitter<string>=new EventEmitter<string>();
onSearchChanged(){
  this.searchTextChanged.emit(this.enteredSearchValue)
}
}
