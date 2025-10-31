import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Banner } from './banner';

describe('BannerComponent', () => {
  let component: Banner;
  let fixture: ComponentFixture<Banner>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [Banner]
});
    fixture = TestBed.createComponent(Banner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
