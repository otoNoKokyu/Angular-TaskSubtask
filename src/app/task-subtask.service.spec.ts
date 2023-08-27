import { TestBed } from '@angular/core/testing';

import { TaskSubtaskService } from './task-subtask.service';

describe('TaskSubtaskService', () => {
  let service: TaskSubtaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskSubtaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
