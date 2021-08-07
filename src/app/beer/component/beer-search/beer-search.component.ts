import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Beer } from '../../model/beer.model';
import { BeerService } from '../../service/beer.service';

@Component({
  selector: 'app-beer-search',
  templateUrl: './beer-search.component.html',
  styleUrls: ['./beer-search.component.scss'],
})
export class BeerSearchComponent implements OnInit {
  // Note - Would have added the pagination using per_page and page param in Punk API documentation
  // Their is no param for description hence it's returning result as their is no param

  beerSearchForm: FormGroup;
  isSearchCompleted: boolean = false;
  resultedBeer: Beer[];
  constructor(
    private readonly fb: FormBuilder,
    private readonly beerService: BeerService
  ) {}

  ngOnInit(): void {
    this.initializedForm();
  }

  initializedForm() {
    this.beerSearchForm = this.fb.group({
      search: [
        '',
        [Validators.required, Validators.pattern(/^[a-zA-Z0-9\- ]*$/)],
      ],
      paramType: ['beer_name', [Validators.required]],
    });
  }

  async submitForm(form) {
    if (!form.valid) {
      return;
    }

    try {
      const formValue = form.getRawValue();
      this.resultedBeer = await this.beerService.getSearchBeer(
        formValue.search,
        formValue.paramType
      );
      this.isSearchCompleted = true;
    } catch (e) {
      // throw error or log to sentry/Analytics tool
    }
  }
}
