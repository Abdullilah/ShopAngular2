import {Component} from 'angular2/core';
import {NewItemComponent} from "./newItem.component";

@Component({
  selector: 'itemsComp',
  template: `
      <div class="header">
        <h1>Items</h1>
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

export class ItemsComponent {
  public myObj = [
    {img: "images/i1.png", title: "Football", desc: "This item is so good, I advise all my friends to try it", price: "17"},
    {img: "images/i2.jpg", title: "Basketball", desc: "This item is so good, I advise all my friends to try it", price: "14"},
    {img: "images/i3.png", title: "Tennis ball", desc: "This item is so good, I advise all my friends to try it", price: "19"},
    {img: "images/i4.jpg", title: "Wood basket", desc: "This item is so good, I advise all my friends to try it", price: "20"},
    {img: "images/i5.jpg", title: "Fruit basket", desc: "This item is so good, I advise all my friends to try it", price: "31"},
    {img: "images/i6.jpg", title: "Wood box", desc: "This item is so good, I advise all my friends to try it", price: "33"}
  ];
}
