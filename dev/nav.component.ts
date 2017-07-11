import {Component} from 'angular2/core';
import {Router} from "angular2/router";

@Component({
  selector: 'navComp',
  template: `
        <nav class="navbar navbar-fixed-top navbar-inverse">
          <div class="container">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a (click)="onNavigate('StartPage')" class="navbar-brand">Abd2Dev</a>
            </div>
            <div id="navbar" class="collapse navbar-collapse">
              <ul class="nav navbar-nav">
                <li><a (click)="onNavigate('FoodsPage')">Foods</a></li>
                <li><a (click)="onNavigate('DrinksPage')">Drinks</a></li>
                <li><a (click)="onNavigate('ItemsPage')">Items</a></li>
              </ul>
            </div><!-- /.nav-collapse -->
          </div><!-- /.container -->
        </nav><!-- /.navbar -->
    `,
})
export class NavComponent {
  constructor(private _router: Router){}
  onNavigate(page: string){
    this._router.navigate([page]);
  }
}
