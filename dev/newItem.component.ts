import {Component} from 'angular2/core';
import {ContactService} from "./contact.service";
import {Contact} from "./contact";

@Component({
  selector: 'newItem',
  template: `
          <div class="col-xs-12 col-sm-6 col-md-4">
          <div class="thumbnail">
            <img src="{{myObj.img}}" alt="...">
            <span class="price">$ {{myObj.price}}</span>
            <div class="caption">
              <h3>{{myObj.title}}</h3>
              <p>{{myObj.desc}}</p>
              <span>Number: </span><input type="number" value="1" min="1" max="100" #numberIn><br>
              <button class="btn btn-primary" (click)="onAddContact(myObj, numberIn)">Add To List</button> 
            </div>
          </div>
        </div>
    `,
  inputs: ['myObj'],
  providers: [ContactService]
})

export class NewItemComponent {
  public contacts: Contact[];

  constructor(private _contactService: ContactService){}
  onAddContact(myObect, numberIn) {
    let contact:Contact = {
      name: myObect.title,
      price: parseInt(myObect.price),
      number: parseInt(numberIn.value),
      result: parseInt(myObect.price) * parseInt(numberIn.value)
    };
    this._contactService.insertContact(contact);
  }

}
