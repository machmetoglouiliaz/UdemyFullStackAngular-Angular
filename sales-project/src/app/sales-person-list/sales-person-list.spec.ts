import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesPersonList } from './sales-person-list';

describe('SalesPersonList', () => {
  let component: SalesPersonList;
  let fixture: ComponentFixture<SalesPersonList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalesPersonList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesPersonList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
