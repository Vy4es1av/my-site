import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './top/main.component';
import { InfoComponent } from './info/info.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FeedbackFormModule } from "../feedback-form/feedback-form.module";

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
    declarations: [
        MainComponent,
        InfoComponent,
        CarouselComponent,
    ],
    exports: [
        MainComponent,
        InfoComponent,
        CarouselComponent,
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
    ]
})
export class MainModule { }
