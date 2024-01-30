import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnchangechilddemoComponent } from './onchangechilddemo.component';

describe('OnchangechilddemoComponent', () => {
  let component: OnchangechilddemoComponent;
  let fixture: ComponentFixture<OnchangechilddemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnchangechilddemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnchangechilddemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
