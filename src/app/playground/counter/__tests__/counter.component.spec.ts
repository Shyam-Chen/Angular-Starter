import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MobxAutorunDirective } from 'mobx-angular';

import { CounterComponent } from '../counter.component';
import { CounterStore } from '../counter.store';

describe('CounterComponent', () => {
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        MobxAutorunDirective,
        CounterComponent
      ],
      providers: [CounterStore]
    });

    fixture = TestBed.createComponent(CounterComponent);
    fixture.detectChanges();
  });

  it('renders markup to snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });
});
