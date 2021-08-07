import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Beer } from '../../model/beer.model';

@Component({
  selector: 'app-beer-card',
  templateUrl: './beer-card.component.html',
  styleUrls: ['./beer-card.component.scss'],
})
export class BeerCardComponent implements OnInit {
  @Input() randomBeer: Beer;
  @Output() getRandomBeer = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  getAnotherBeer(beerType) {
    this.getRandomBeer.next(beerType);
  }
}
