/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AutocompletePlacesService } from './autocompletePlaces.service';

describe('Service: AutocompletePlaces', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutocompletePlacesService]
    });
  });

  it('should ...', inject([AutocompletePlacesService], (service: AutocompletePlacesService) => {
    expect(service).toBeTruthy();
  }));
});
