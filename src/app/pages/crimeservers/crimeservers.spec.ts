import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {SharedModule} from '../../shared/shared.module';
import {ListCrimeserversComponent} from './list-crimeservers/list-crimeservers.component';
import {CrimeservicesService} from '../../shared/services/crimeservices.service';
import {CrimeservicesStub} from '../../shared/models/test/crimeservices-stub';
import {DetailCrimeserversComponent} from './detail-crimeservers/detail-crimeservers.component';
import {RouterTestingModule} from '@angular/router/testing';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {CRIMESERVERS_ROUTING} from './crimeservers.routing';
import {Observable} from 'rxjs/Observable';

describe('Crimeservers Module', () => {
  let componentList: ListCrimeserversComponent;
  let fixtureList: ComponentFixture<ListCrimeserversComponent>;

  let componentDetail: DetailCrimeserversComponent;
  let fixtureDetail: ComponentFixture<DetailCrimeserversComponent>;

  let crimeServices: CrimeservicesService;

  let router: Router;
  let location: Location;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        RouterTestingModule.withRoutes(CRIMESERVERS_ROUTING)
      ],
      declarations: [
        ListCrimeserversComponent,
        DetailCrimeserversComponent
      ],
      providers: [
        {provide: CrimeservicesService, useClass: CrimeservicesStub},
      ]
    });

    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixtureDetail = TestBed.createComponent(DetailCrimeserversComponent);
    fixtureList = TestBed.createComponent(ListCrimeserversComponent);
    router.initialNavigation();
  }));

  beforeEach(() => {
    fixtureList = TestBed.createComponent(ListCrimeserversComponent);
    componentList = fixtureList.componentInstance;
    fixtureList.detectChanges();
  });

  it('instance ListCrimeserversComponent ', () => {
    expect(componentList).toBeTruthy();
  });

  beforeEach(() => {
    fixtureDetail = TestBed.createComponent(DetailCrimeserversComponent);
    componentDetail = fixtureDetail.componentInstance;
    fixtureDetail.detectChanges();
  });

  it('instance DetailCrimeserversComponent ', () => {
    expect(componentDetail).toBeTruthy();
  });


  describe('App navigation : CRIMESERVERS_ROUTING', () => {

    it('navigate to "crimeservers list"', fakeAsync(() => {
      router.navigate(['/list']);
      tick();
      expect(location.path()).toBe('/list');
    }));
    it('navigate to "crimeservers detail"', fakeAsync(() => {
      router.navigate(['/detail/123']);
      tick();
      expect(location.path()).toBe('/detail/123');
    }));

  });

  beforeEach(() => {

    // Call and Mock method Servies
    crimeServices = TestBed.get(CrimeservicesService);
    spyOn(crimeServices, 'getWidgets').and.returnValue(Observable.of([]));
    spyOn(crimeServices, 'getGraph').and.returnValue(Observable.of([]));
    spyOn(crimeServices, 'getListCrimeServers').and.returnValue(Observable.of([]));
    spyOn(crimeServices, 'getCrimeServersId').and.returnValue(Observable.of([]));
  });
});
