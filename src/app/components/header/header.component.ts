import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'MY HEROES';
  showAddHero: boolean = false;
  subscription!: Subscription;
  showButton: boolean = false;

  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddHero = value));
    // this.showButton = this.hasRoute('/heroes');
  }

  ngOnInit(): void {
    this.router.events
      .pipe(
        // tap(console.log),
        filter((event) => event instanceof NavigationEnd),
        tap(() => (this.showButton = this.hasRoute('/heroes')))
      )
      .subscribe();
  }

  toggleAddHero() {
    this.uiService.toggleAddHero();
  }

  hasRoute(route: string) {
    console.warn(this.router.url);
    return this.router.url === route;
  }
}
