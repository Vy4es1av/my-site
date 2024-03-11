import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-video-shooting',
  templateUrl: './video-shooting.component.html',
  styleUrls: ['./video-shooting.component.css']
})

export class VideoShootingComponent implements OnInit{

  // КУСОК КОДА ДЛЯ ВЫВОДА ДАННЫХ С ФОРМЫ В КОНСОЛЬ
  contactForm!: FormGroup;
  isSubmit = true;
  submitMessage = '';

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
  // КУСОК КОДА ДЛЯ ВЫВОДА ДАННЫХ С ФОРМЫ В КОНСОЛЬ


  // КУСОК КОДА ДЛЯ МАОЛЬНОГО ОКНА
  openModel() {
    const modelDiv = document.getElementById('myModal');
    const modelDiv2 = document.getElementById('myModalBackground');
    let addHidden;
    if (modelDiv!=null && modelDiv2!=null) {
      modelDiv.style.display = 'block';
      modelDiv2.style.display = 'block';
      addHidden = document.body.classList.add('modal-open');
    }
  }

  CloseModel() {
    const modelDiv = document.getElementById('myModal');
    const modelDiv2 = document.getElementById('myModalBackground');
    let addHidden;
    if (modelDiv!=null && modelDiv2!=null) {
      modelDiv.style.display = 'none';
      modelDiv2.style.display = 'none';
      addHidden = document.body.classList.remove('modal-open');
    }
  }
  // КУСОК КОДА ДЛЯ МАОЛЬНОГО ОКНА


  // КУСОК КОДА ДЛЯ КНОПКИ СКРОЛЛА ВВЕРХ ДОКУМЕНТА
  isShow: boolean | undefined;
  topPosToStartShowing = 100;

  @HostListener('window:scroll')
  checkScroll() {

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    console.log('[scroll]', scrollPosition);
    
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  // TODO: Cross browsing
  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth',
    });
  }
  // КУСОК КОДА ДЛЯ КНОПКИ СКРОЛЛА ВВЕРХ ДОКУМЕНТА
}
