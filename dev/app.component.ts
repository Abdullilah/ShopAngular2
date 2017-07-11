import {Component} from 'angular2/core';
import {NavComponent} from "./nav.component";
import {FoodsComponent} from "./foods.component";
import {DrinksComponent} from "./drinks.component";
import {ItemsComponent} from "./items.component";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {StartComponent} from "./start.component";
import {Contact} from "./contact";
import {ContactService} from "./contact.service";

@Component({
    selector: 'my-app',
    template: `
          <navComp></navComp>
          <section class="page">
            <div class="container">
              <div class="row">
                <div class="col-sm-12 col-md-9 mainPage">
                  <router-outlet></router-outlet>
                </div>
                <div  class="col-md-3 orderList">
                  <div class="list-group orderedItems">
                    <div class="list-group-item active">Your Orders</div>
                      <ul class="list-group-item">
                        <li *ngFor="#obj of contacts">
                          <h4>Name: {{obj.name}}</h4>
                          <p>Price: $ {{obj.price}}</p>
                          <p>Number: {{obj.number}}</p>
                          <p>cost: $ {{obj.result}}</p>
                        </li>
                      </ul>
                      <div class="buyNow">
                        <b>Total Cost:</b><span>$ {{totalPrice}}</span><br>
                        <button class="btn btn-primary" [disabled]="contacts?.length <= 0">Buy Now</button>
                      </div>
                  </div>
                </div>
              </div>
            </div> 
          </section>
          
    `,
  directives: [NavComponent, StartComponent, FoodsComponent, DrinksComponent, ItemsComponent, ROUTER_DIRECTIVES],
  providers: [ContactService]
})

@RouteConfig([
  {path: '/', name: 'StartPage', component: StartComponent, useAsDefault: true},
  {path: '/foods', name: 'FoodsPage', component: FoodsComponent},
  {path: '/drinks', name: 'DrinksPage', component: DrinksComponent},
  {path: '/items', name: 'ItemsPage', component: ItemsComponent}
])
export class AppComponent {
  public contacts: Contact[];
  public totalPrice : number;
  constructor(private _contactService: ContactService){}
  ngOnInit():any {
    this.getContacts();
    this.totalPrice = 0;
  }

  getContacts(){
    this._contactService.getContact().then((contacts: Contact[])=> this.contacts = contacts);
  }
  //noinspection JSAnnotator

  // for (let entry of contacts) {
  //   this.totalPrice += entry.result;
  // }
}
