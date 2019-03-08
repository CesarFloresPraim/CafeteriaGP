import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaincafeComponent } from './maincafe.component';

describe('MaincafeComponent', () => {
  let component: MaincafeComponent;
  let fixture: ComponentFixture<MaincafeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaincafeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaincafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
