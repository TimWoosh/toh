import { TestBed } from '@angular/core/testing';

import { TimedDialogService } from './timed-dialog.service';

describe('TimedDialogService', () => {
  let service: TimedDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimedDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
