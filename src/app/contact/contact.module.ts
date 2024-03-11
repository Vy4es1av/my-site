import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { FeedbackFormModule } from "../feedback-form/feedback-form.module";


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
    declarations: [
        ContactComponent
    ],
    exports: [
        ContactComponent
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
export class ContactModule { }
