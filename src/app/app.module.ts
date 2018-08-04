import { NgModule, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <a routerLink="/">one</a> |
    <a routerLink="/page-two">two</a>
    <div><router-outlet></router-outlet></div>
  `,
})
export class AppComponent {}

@Component({template: 'page one'})
export class PageOneComponent {}

@Component({template: 'page two'})
export class PageTwoComponent {}

@Injectable()
export class UsersResolver implements Resolve<any> {

  constructor(private http: HttpClient) {}

  public resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}

@NgModule({
  declarations: [ AppComponent, PageOneComponent, PageTwoComponent ],
  imports: [
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: PageOneComponent },
      { path: 'page-two', component: PageTwoComponent,
        resolve: { users: UsersResolver },
      },
    ]),
    BrowserModule,
  ],
  providers: [ UsersResolver ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
