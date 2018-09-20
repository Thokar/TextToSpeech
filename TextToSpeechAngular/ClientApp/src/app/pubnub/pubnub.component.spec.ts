import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PubnubComponent } from './pubnub.component';

describe('PubnubComponent', () => {
  let component: PubnubComponent;
  let fixture: ComponentFixture<PubnubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PubnubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PubnubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
