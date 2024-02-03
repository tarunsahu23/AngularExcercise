import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingtextBoxesRfaComponent } from './workingtext-boxes-rfa.component';

describe('WorkingtextBoxesRfaComponent', () => {
  let component: WorkingtextBoxesRfaComponent;
  let fixture: ComponentFixture<WorkingtextBoxesRfaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkingtextBoxesRfaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkingtextBoxesRfaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
