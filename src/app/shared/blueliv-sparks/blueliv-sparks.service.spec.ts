import {TestBed, inject} from '@angular/core/testing';
import {BluelivSparksService} from './blueliv-sparks.service';
import {CrimeservicesStub} from '../models/test/crimeservices-stub';
import {Observable} from 'rxjs/Observable';

describe('BluelivSparksService', () => {

  let sparksServices: BluelivSparksService;


  const resultMock = [{
    'created_at': '2016-02-26T16:49:13.464+01:00',
    'title': 'Performing automated Yara Q&A with Cuckoo',
    'tags': ['YARA', 'YARAQA', 'CUCKOO', 'BLOG'],
    'iocs_counters': {'HASH': 0, 'IPv4': 0, 'URL': 1, 'CVE': 0, 'DOMAIN': 0, 'HOST': 0, 'TOTAL': 1}
  }];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: BluelivSparksService, useClass: CrimeservicesStub},
      ]
    });
  });

  it('should be created', inject([BluelivSparksService], (service: BluelivSparksService) => {
    expect(service).toBeTruthy();
  }));


  beforeEach(() => {
    // Call and Mock method Servies
    sparksServices = TestBed.get(BluelivSparksService);
    spyOn(sparksServices, 'getSparksFilter').and.returnValue(Observable.of(resultMock));
  });




});
