import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbnailCardComponent } from './thumbnail-card.component';

describe('ThumbnailCardComponent', () => {
  let component: ThumbnailCardComponent;
  let fixture: ComponentFixture<ThumbnailCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThumbnailCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbnailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
