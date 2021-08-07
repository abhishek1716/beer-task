import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerComponent } from './beer.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('BeerComponent', () => {
  let component: BeerComponent;
  let fixture: ComponentFixture<BeerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeerComponent ],
      imports:[
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
