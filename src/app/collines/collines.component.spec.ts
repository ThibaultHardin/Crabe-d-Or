import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollinesComponent } from './collines.component';

describe('CollinesComponent', () => {
  let component: CollinesComponent;
  let fixture: ComponentFixture<CollinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
