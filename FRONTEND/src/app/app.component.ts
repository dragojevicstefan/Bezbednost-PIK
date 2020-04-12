import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private router: Router,
    private breakpointObserver: BreakpointObserver,
    private userService:UserService
    ) { }
  
    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(
        map((result) => result.matches),
        shareReplay()
      );
  
      public isLoggedIn() {
        return this.userService.isLoggedIn();
      }
      public isNone(){
        return this.userService.isNone();
      }
      public isAdmin() {
        return this.userService.isAdmin();
      }
      public onLogout() {
        this.userService.logout();
      }
}
