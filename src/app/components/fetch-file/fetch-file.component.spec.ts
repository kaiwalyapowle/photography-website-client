import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchFileComponent } from './fetch-file.component';

describe('FetchFileComponent', () => {
  let component: FetchFileComponent;
  let fixture: ComponentFixture<FetchFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
