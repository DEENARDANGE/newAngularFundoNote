import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivestatusComponent } from './activestatus.component';

describe('ActivestatusComponent', () => {
  let component: ActivestatusComponent;
  let fixture: ComponentFixture<ActivestatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivestatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivestatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
