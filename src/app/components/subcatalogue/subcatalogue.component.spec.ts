import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcatalogueComponent } from './subcatalogue.component';

describe('SubcatalogueComponent', () => {
  let component: SubcatalogueComponent;
  let fixture: ComponentFixture<SubcatalogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcatalogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
