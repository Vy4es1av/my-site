import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { MainModule } from './main/main.module';
import { ContactModule } from './contact/contact.module';
import { VideoShootingModule } from './video-shooting/video-shooting.module';
import { FeedbackFormModule } from './feedback-form/feedback-form.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { DelayResolver } from './delay.resolver';


interface NgxSpinnerConfig {
  type?: string;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    MainModule,
    ContactModule,
    FeedbackFormModule,
    VideoShootingModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' })
  ],
  providers: [DelayResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
