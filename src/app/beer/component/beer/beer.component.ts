import { Component, OnInit } from '@angular/core';
import { Beer } from '../../model/beer.model';
import { BeerService } from '../../service/beer.service';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss'],
})
export class BeerComponent implements OnInit {
  beer: Beer | null;
  constructor(private readonly beerService: BeerService) {}

  ngOnInit(): void {
    this.getInitialRandomBeer();
  }

  async getInitialRandomBeer() {
    this.beer = new Beer((await this.beerService.getRandomBeer())[0]);
  }

  async getRandomBeer(beerType) {
    this.beer = null;
    switch (beerType) {
      case 'alcoholic':
        this.beer = await this.beerService.getRandomAlcoholicBeer();
        break;
      case 'nonAlcoholic':
        this.beer = await this.beerService.getRandomNonAlcoholicBeer();
        break;
      default:
        this.getInitialRandomBeer();
        break;
    }
  }
}
