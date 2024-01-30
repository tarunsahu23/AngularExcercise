import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnchangeparentdemoComponent } from './onchangeparentdemo.component';

describe('OnchangeparentdemoComponent', () => {
  let component: OnchangeparentdemoComponent;
  let fixture: ComponentFixture<OnchangeparentdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnchangeparentdemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnchangeparentdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
