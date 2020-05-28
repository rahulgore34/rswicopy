import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostnewjobComponent } from './postnewjob.component';

describe('PostnewjobComponent', () => {
  let component: PostnewjobComponent;
  let fixture: ComponentFixture<PostnewjobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostnewjobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostnewjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
