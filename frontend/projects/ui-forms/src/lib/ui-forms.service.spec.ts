import { TestBed } from '@angular/core/testing';

import { UiFormsService } from './ui-forms.service';

describe('UiFormsService', () => {
  let service: UiFormsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiFormsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
