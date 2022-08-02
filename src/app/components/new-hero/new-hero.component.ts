import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Hero } from 'src/app/Hero';
@Component({
  selector: 'app-new-hero',
  templateUrl: './new-hero.component.html',
  styleUrls: ['./new-hero.component.css'],
})
export class NewHeroComponent implements OnInit {
  @Output() onAddHero: EventEmitter<Hero> = new EventEmitter();
  lastName!: string;
  firstName!: string;
  heroName!: string;
  superpowerName!: string;
  showAddHero!: boolean;
  subscription!: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddHero = value));
  }

  ngOnInit(): void {}

  onSubmit() {
    if (
      !this.lastName ||
      !this.firstName ||
      !this.heroName ||
      !this.superpowerName
    ) {
      alert('Please fill the required fields!');
      return;
    }

    const newHero = {
      lastName: this.lastName,
      firstName: this.firstName,
      heroName: this.heroName,
      superpowerName: this.superpowerName,
    };
    this.onAddHero.emit(newHero);
    this.lastName = '';
    this.firstName = '';
    this.heroName = '';
    this.superpowerName = '';
  }
}
