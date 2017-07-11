import {Component} from 'angular2/core';
import {NewItemComponent} from "./newItem.component";

@Component({
  selector: 'drinksComp',
  template: `
     <div class="header">
        <h1>Drinks</h1>
        <p>Buy More and Pay Less, Enjoy Shopping</p>
      </div>
      <ul>
        <li *ngFor="#obj of myObj">
          <newItem [myObj]="obj"></newItem>
        </li>
      </ul>
    `,
  directives: [NewItemComponent]
})

export class DrinksComponent {
  public myObj = [
    {img: "images/d1.jpg", title: "Banana juice", desc: "This juice is so tasty, I advise all my friends to try it", price: "12"},
    {img: "images/d2.png", title: "Orange juice", desc: "This juice is so tasty, I advise all my friends to try it", price: "31"},
    {img: "images/d3.png", title: "Chocolate juice", desc: "This juice is so tasty, I advise all my friends to try it", price: "21"},
    {img: "images/d4.jpg", title: "Lemon juice", desc: "This juice is so tasty, I advise all my friends to try it", price: "222"},
    {img: "images/d5.jpg", title: "Water", desc: "This juice is so tasty, I advise all my friends to try it", price: "216"},
    {img: "images/d6.jpg", title: "Alcohol", desc: "This juice is so tasty, I advise all my friends to try it", price: "22"}
  ];
}
