import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule,
  ],
  exports: [
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule,
  ],
})
export class SharedModule {}
