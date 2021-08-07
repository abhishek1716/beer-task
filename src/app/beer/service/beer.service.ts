import { Injectable } from '@angular/core';
import { Beer } from '../model/beer.model';
import { BackendService } from './backend.service';

@Injectable({
  providedIn: 'root',
})
export class BeerService {
  // Note - NonAlcoholic Beer means ABV value to be <= 0.05% which is not clear in the API since it's given as number hence considering
  // abv value less than 5 to be Non-Alcholic Beer

  perPage: number = 80; // maximum result send once by a punk api
  abvDecidingLevel: number = 5;
  constructor(private readonly backendService: BackendService) {}

  async getRandomAlcoholicBeer() {
    const result = await this.backendService.get(
      `/beers/?abv_gt=${this.abvDecidingLevel}&per_page=${this.perPage}`
    );
    return this.randomBeerFromBeersList(result);
  }

  async getRandomNonAlcoholicBeer() {
    const result = await this.backendService.get(
      `/beers/?abv_lt=${this.abvDecidingLevel}&per_page=${this.perPage}`
    );
    return this.randomBeerFromBeersList(result);
  }

  async randomBeerFromBeersList(beerList) {
    return new Beer(beerList[Math.floor(Math.random() * beerList.length)]);
  }

  async getRandomBeer() {
    return await this.backendService.get('/beers/random');
  }

  async getSearchBeer(searchValue, paramType) {
    const result = await this.backendService.get(
      `/beers/?${paramType}=${searchValue}&per_page=${this.perPage}`
    );
    return result as Beer[];
  }
}
