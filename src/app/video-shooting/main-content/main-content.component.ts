import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent {
  isShow1: boolean | undefined;
  topPosToStartShowing1 = 100;
  isShow2: boolean | undefined;
  topPosToStartShowing2 = 900;
  isShow3: boolean | undefined;
  topPosToStartShowing3 = 1800;

  @HostListener('window:scroll')
  checkScroll() {

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    console.log('[scroll]', scrollPosition);
    
    if (scrollPosition >= this.topPosToStartShowing1) {
      this.isShow1 = true;
    } else {
      this.isShow1 = false;
    }
    if (scrollPosition >= this.topPosToStartShowing2) {
      this.isShow2 = true;
    } else {
      this.isShow2 = false;
    }
    if (scrollPosition >= this.topPosToStartShowing3) {
      this.isShow3 = true;
    } else {
      this.isShow3 = false;
    }
  }

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

  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth',
    });
  }
}
