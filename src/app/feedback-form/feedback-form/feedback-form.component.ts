import { Component, Input, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit {

  contactForm!: FormGroup;
  isSubmit = true;
  submitMessage = '';
  yandexMap: boolean = false;

  activeMap() {
    this.yandexMap =! this.yandexMap;
  }

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      firstName:[null, Validators.required],
      phone:[null, Validators.required],
      email:[null,[Validators.required, Validators.email]],
      message:[null, Validators.required]
    })
  }

  get firstName() { return this.contactForm.get('firstName'); }

  submitDate(value:any) {
    console.log(value);

    this.submitMessage = 'Заявка отправлена';

    setTimeout(() => {
      this.isSubmit=false;
    }, 8000);
  }
}
