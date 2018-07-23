import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWorldComponent } from '../hello-world.component';

describe('HelloWorldComponent', () => {
  let fixture: ComponentFixture<HelloWorldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HelloWorldComponent,
      ],
    });

    fixture = TestBed.createComponent(HelloWorldComponent);
    fixture.detectChanges();
  });

  it('should render an initial component', () => {
    expect(fixture).toMatchSnapshot();
  });
});
