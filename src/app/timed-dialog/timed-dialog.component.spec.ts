import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimedDialogComponent } from './timed-dialog.component';

describe('TimedDialogComponent', () => {
  let component: TimedDialogComponent;
  let fixture: ComponentFixture<TimedDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimedDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimedDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
