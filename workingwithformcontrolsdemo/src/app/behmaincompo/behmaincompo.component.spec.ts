import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehmaincompoComponent } from './behmaincompo.component';

describe('BehmaincompoComponent', () => {
  let component: BehmaincompoComponent;
  let fixture: ComponentFixture<BehmaincompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BehmaincompoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BehmaincompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
