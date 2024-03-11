import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    FeedbackFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  exports: [
    FeedbackFormComponent,
  ]
})
export class FeedbackFormModule { }
