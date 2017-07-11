import {Component} from 'angular2/core';
import {NewItemComponent} from "./newItem.component";

@Component({
  selector: 'foodsComp',
  template: `
      <div class="header">
        <h1>Foods</h1>
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

export class FoodsComponent {
  public myObj = [
    {img: "images/f1.jpg", title: "Pizza", desc: "This food is so tasty, I advise all my friends to try it", price: "14"},
    {img: "images/f2.jpg", title: "Burger/Chips", desc: "This food is so tasty, I advise all my friends to try it", price: "17"},
    {img: "images/f3.jpg", title: "Vegetables", desc: "This food is so tasty, I advise all my friends to try it", price: "15"},
    {img: "images/f4.jpg", title: "Fish", desc: "This food is so tasty, I advise all my friends to try it", price: "12"},
    {img: "images/f5.jpg", title: "Sandwich", desc: "This food is so tasty, I advise all my friends to try it", price: "21"},
    {img: "images/f6.jpg", title: "Grilled Meat", desc: "This food is so tasty, I advise all my friends to try it", price: "26"}
  ];
}
