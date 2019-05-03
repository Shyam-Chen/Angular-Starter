import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundComponent } from '../not-found.component';

describe('NotFoundComponent', () => {
  let fixture: ComponentFixture<NotFoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        NotFoundComponent,
      ],
    });

    fixture = TestBed.createComponent(NotFoundComponent);
    fixture.detectChanges();
  });

  it('should render an initial component', () => {
    expect(fixture).toMatchSnapshot();
  });
});
