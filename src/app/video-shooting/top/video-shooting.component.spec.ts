import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoShootingComponent } from './video-shooting.component';

describe('VideoShootingComponent', () => {
  let component: VideoShootingComponent;
  let fixture: ComponentFixture<VideoShootingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoShootingComponent]
    });
    fixture = TestBed.createComponent(VideoShootingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
