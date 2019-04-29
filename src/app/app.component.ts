import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  authenticated = false;

  constructor(private authService: AuthService,
              private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/login' || event.url === '/register') {
          this.authenticated = false;
        } else {
          this.authenticated = true;
        }
      }
    });
  }

  onLogout() {
    this.authService.logout().subscribe(() => this.router.navigate(['login']));
  }
}
