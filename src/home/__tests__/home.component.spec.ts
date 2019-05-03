import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from '../home.component';

describe('HomeComponent', () => {
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
      ],
    });

    fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
  });

  it('should render an initial component', () => {
    expect(fixture).toMatchSnapshot();
  });
});
