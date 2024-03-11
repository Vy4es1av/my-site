import { Component, HostListener } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  navbarfixed: boolean = false;

  menuVariable: boolean = false;

  openMenu() {
    let addHidden;
    this.menuVariable =! this.menuVariable;

    if (this.menuVariable === true) {
      addHidden = document.body.classList.add('modal-open');
    } else {
      addHidden = document.body.classList.remove('modal-open');
    }
  }

  closeMenu() {
    let addHidden;
    
    if (this.menuVariable === true) {
      this.menuVariable = false;
      addHidden = document.body.classList.remove('modal-open');
    }
  }

  @HostListener('window:scroll',['$event']) onscroll(){
    if(window.scrollY > 1) {
      this.navbarfixed = true;
    } else {
      this.navbarfixed = false;
    }
  }

  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth',
    });
  }

  constructor(private spinner: NgxSpinnerService){}

  openSpinner(){
    this.spinner.show();
    setTimeout(() =>{
      this.spinner.hide();
    }, 3000)
  }
}
