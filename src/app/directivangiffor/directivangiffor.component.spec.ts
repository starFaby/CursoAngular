import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivangifforComponent } from './directivangiffor.component';

describe('DirectivangifforComponent', () => {
  let component: DirectivangifforComponent;
  let fixture: ComponentFixture<DirectivangifforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivangifforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivangifforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
