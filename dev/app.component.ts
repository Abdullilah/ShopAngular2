import {Component, ElementRef} from 'angular2/core';
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
                <div class="col-xs-12 col-md-9 mainPage">
                    <router-outlet></router-outlet>
                </div>
                <div  class="col-xs-12 col-sm-8 col-md-3 orderList">
                  <div class="list-group orderedItems">
                    <div class="list-group-item active">Your Orders</div>
                      <ul class="list-group-item">
                        <li *ngFor="#obj of contacts">
                          <h4>{{obj.name}} $ {{obj.result}}</h4>
                          <p>Price: $ {{obj.price}}</p>
                          <p>Number: {{obj.number}}</p>
                        </li>
                      </ul>
                      <div class="buyNow" *ngIf="contacts?.length > 0">
                        <b>Total Cost:</b><span class="totalCost">$ {{totalPrice}}</span><br>
                        <button class="btn btn-primary" [disabled]="contacts?.length <= 0">Buy Now</button>
                      </div>
                  </div>
                </div>
              </div>
            </div> 
          </section>
    `,
  directives: [NavComponent, StartComponent, FoodsComponent, DrinksComponent, ItemsComponent, ROUTER_DIRECTIVES],
  providers: [ContactService],
  styleUrls: ['../css/style.css']
})

@RouteConfig([
  {path: '/', name: 'StartPage', component: StartComponent, useAsDefault: true},
  {path: '/foods', name: 'FoodsPage', component: FoodsComponent},
  {path: '/drinks', name: 'DrinksPage', component: DrinksComponent},
  {path: '/items', name: 'ItemsPage', component: ItemsComponent}
])
export class AppComponent {
  public contacts: Contact[];
  public totalPrice: number = 0;
  constructor(private _contactService: ContactService){
    setInterval(() => {
      var sum = 0;
      for(var i in this.contacts) { sum += this.contacts[i].result; }
      this.totalPrice = sum;
    }, 500);
  }
  ngOnInit():any {
    this.getContacts();
  }
  getContacts(){
    this._contactService.getContact().then((contacts: Contact[])=> this.contacts = contacts);
  }

}
