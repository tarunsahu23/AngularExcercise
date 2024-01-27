import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentcompoComponent } from './parentcompo.component';

describe('ParentcompoComponent', () => {
  let component: ParentcompoComponent;
  let fixture: ComponentFixture<ParentcompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentcompoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentcompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
