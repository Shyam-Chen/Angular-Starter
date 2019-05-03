import { NgZone } from '@angular/core';
import { Location, APP_BASE_HREF, LocationStrategy } from '@angular/common';
import { Router, PreloadAllModules, PreloadingStrategy, NoPreloading } from '@angular/router';

import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { SpyLocation, MockLocationStrategy } from '@angular/common/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HomeModule } from '../home/home.module';
import { NotFoundModule } from '../not-found/not-found.module';

import { ROUTES } from '../app-routing.module';

describe('AppRoutingModule', () => {
  let router: Router;
  let location: Location;
  let ngZone: NgZone;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HomeModule,
        NotFoundModule,
        RouterTestingModule.withRoutes(ROUTES, { preloadingStrategy: PreloadAllModules }),
      ],
      providers: [
        { provide: Location, useClass: SpyLocation },
        { provide: APP_BASE_HREF, useValue: '/' },
        { provide: LocationStrategy, useClass: MockLocationStrategy },
        { provide: PreloadingStrategy, useExisting: NoPreloading },
      ],
    });

    router = TestBed.get(Router);
    location = TestBed.get(Location);
    ngZone = TestBed.get(NgZone);
  });

  it('should work', fakeAsync(() => {
    ngZone.run(() => router.navigate(['']));
    tick();
    expect(location.path()).toBe('/');
  }));
});
