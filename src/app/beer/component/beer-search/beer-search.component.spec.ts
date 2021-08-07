import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BeerSearchComponent } from './beer-search.component';
import { FormBuilder } from '@angular/forms';

describe('BeerSearchComponent', () => {
  let component: BeerSearchComponent;
  let fixture: ComponentFixture<BeerSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeerSearchComponent ],
      imports:[
        HttpClientTestingModule
      ],
      providers:[FormBuilder]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
