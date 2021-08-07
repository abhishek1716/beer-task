import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { BeerService } from './beer.service';
import { environment } from 'src/environments/environment';

describe('BeerService', () => {
  let beerService: BeerService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BeerService],
    });

    beerService = TestBed.inject(BeerService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it(
    'should return random beer',
    waitForAsync(
      inject(
        [HttpTestingController, BeerService],
        (httpClient: HttpTestingController, beerService: BeerService) => {
          const randomBeer = [
            {
              id: '1',
              name: 'beer_name',
              description: 'beer_description',
              image_url: 'https://images.punkapi.com/v2/keg.png',
            },
          ];

          beerService.getRandomBeer().then((beerData) => {
            expect(beerData.length).toBe(1);
          });
          let req = httpMock.expectOne(`${environment.API_URL}/beers/random`);
          expect(req.request.method).toBe('GET');

          req.flush(randomBeer);
          httpMock.verify();
        }
      )
    )
  );

  it(
    'should return data with associated param (by name)',
    waitForAsync(
      inject(
        [HttpTestingController, BeerService],
        (httpClient: HttpTestingController, beerService: BeerService) => {
          const searchedBeerList = [
            {
              id: '1',
              name: 'beer_name 1',
              description: 'beer_description 1',
              image_url: 'https://images.punkapi.com/v2/keg.png',
            },
            {
              id: '2',
              name: 'beer_name 2',
              description: 'beer_description 2',
              image_url: 'https://images.punkapi.com/v2/keg.png',
            },
          ];

          beerService.getSearchBeer('beer', 'beer_name').then((beerData) => {
            console.log(beerData);
            debugger;
            expect(beerData.length).toBe(2);
          });
          let req = httpMock.expectOne(
            `${environment.API_URL}/beers/?beer_name=beer&per_page=80`
          );
          expect(req.request.method).toBe('GET');

          req.flush(searchedBeerList);
          httpMock.verify();
        }
      )
    )
  );
});
