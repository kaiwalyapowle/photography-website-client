import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoIframesComponent } from './video-iframes.component';

describe('VideoIframesComponent', () => {
  let component: VideoIframesComponent;
  let fixture: ComponentFixture<VideoIframesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoIframesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoIframesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
