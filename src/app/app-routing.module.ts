import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/top/main.component';
import { ContactComponent } from './contact/contact.component';
import { VideoShootingComponent } from './video-shooting/top/video-shooting.component';
import { DelayResolver } from './delay.resolver';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    resolve: [DelayResolver]
  },
  {
    path: 'contact',
    component: ContactComponent,
    resolve: [DelayResolver]
  },
  {
    path: 'video-shooting',
    component: VideoShootingComponent,
    resolve: [DelayResolver]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
