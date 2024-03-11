import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoShootingComponent } from './top/video-shooting.component';
import { FeedbackFormModule } from '../feedback-form/feedback-form.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MainContentComponent } from './main-content/main-content.component';

@NgModule({
  declarations: [
    VideoShootingComponent,
    MainContentComponent
  ],
  imports: [
    CommonModule,
    FeedbackFormModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  exports: [
    VideoShootingComponent,
    MainContentComponent
  ]
})
export class VideoShootingModule { }
