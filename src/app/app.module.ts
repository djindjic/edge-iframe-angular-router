import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

    <a routerLink="/page-one">one</a> |
    <a routerLink="/page-two">two</a>
    <div><router-outlet></router-outlet></div>
  `,
})
export class AppComponent  {}

@Component({template: 'page one'})
export class PageOneComponent  {}

@Component({template: 'page two'})
export class PageTwoComponent  {}


@NgModule({
  declarations: [ AppComponent, PageOneComponent, PageTwoComponent ],
  imports: [
    RouterModule.forRoot([
      { path: 'page-one', component: PageOneComponent },
      { path: 'page-two', component: PageTwoComponent },
      { path: '**', component: PageOneComponent },
    ]),
    BrowserModule
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
