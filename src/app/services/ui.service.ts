import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddHero: boolean = false;
  private subject = new Subject<any>();

  constructor() {}

  toggleAddHero(): void {
    this.showAddHero = !this.showAddHero;
    this.subject.next(this.showAddHero);
  }
  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
