import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeerComponent } from './beer/component/beer/beer.component';

const routes: Routes = [
  { path: '', component: BeerComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
