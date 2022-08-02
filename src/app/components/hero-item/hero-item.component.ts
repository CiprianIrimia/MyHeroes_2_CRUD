import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../../Hero';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hero-item',
  templateUrl: './hero-item.component.html',
  styleUrls: ['./hero-item.component.css'],
})
export class HeroItemComponent implements OnInit {
  @Input() hero!: Hero;
  @Output() onDeleteHero: EventEmitter<number> = new EventEmitter();
  faPencil = faPencil;
  faTrash = faTrash;

  constructor() {}

  ngOnInit(): void {}

  onDelete(id: number | undefined) {
    this.onDeleteHero.emit(id);
  }
}
