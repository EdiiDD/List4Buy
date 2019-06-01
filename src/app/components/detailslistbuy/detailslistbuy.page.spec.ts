import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailslistbuyPage } from './detailslistbuy.page';

describe('DetailslistbuyPage', () => {
  let component: DetailslistbuyPage;
  let fixture: ComponentFixture<DetailslistbuyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailslistbuyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailslistbuyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
