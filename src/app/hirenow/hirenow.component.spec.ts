import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HirenowComponent } from './hirenow.component';

describe('HirenowComponent', () => {
  let component: HirenowComponent;
  let fixture: ComponentFixture<HirenowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HirenowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HirenowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
