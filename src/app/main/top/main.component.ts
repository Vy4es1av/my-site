import { Component, HostListener, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{

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



  images = [
    {
      imageSrc:
        'assets/images1.jpg',
      imageAlt: 'images1',
      id: 1,
      titleNumber: '01',
      titleText: 'ОТСУТСТВИЕ ПРОБЛЕМ С КЛИМАТОМ И ПОГОДНЫМИ УСЛОВИЯМИ.',
      subTitleText: `Фотосессия в студии даёт возможность избежать огромного множества проблем, 
        с которыми можно столкнуться, проводя фотосессиюна улице. Съёмка будет
        происходить в закрытом икомфортном помещении, где будет удобно какфотографу,
        так и Вам.
        `,
    },
    {
      imageSrc:
        'assets/images2.jpg',
      imageAlt: 'images2',
      id: 2,
      titleNumber: '02',
      titleText: 'ПОЛНЫЙ КОНТРОЛЬ НАД ОСВЕЩЕНИЕМ.',
      subTitleText: `Студийная фотосессия позволяет не ограничиваться временем фотосъёмки,
        т.е. даже в вечернее время Вы сможете провести очень светлую и живую фотосессию.
        Также за счёт большого числа управляемых источников света в фотостудии
        становится возможным создать необходимый стиль, подчеркнуть нужные детали и скрыть ненужные
        `,
    },
    {
      imageSrc:
        'assets/images3.jpg',
      imageAlt: 'images3',
      id: 3,
      titleNumber: '03',
      titleText: 'МНОЖЕСТВО ИНТЕРЬЕРОВ.',
      subTitleText: `Только на студийной фотосессии становится возможным,
        перемещаясь всего на несколько шагов, оказываться в абсолютно разных локациях.
        Фотостудия №1 предлагает большое количество интерьеров и фонов для проведения съёмок.
        `,
    },
  ]
}
