import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WardropComponent } from './wardrop.component';

describe('WardropComponent', () => {
  let component: WardropComponent;
  let fixture: ComponentFixture<WardropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WardropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WardropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
