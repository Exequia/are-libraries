import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreLibI18nComponent } from './are-lib-i18n.component';

describe('AreLibI18nComponent', () => {
  let component: AreLibI18nComponent;
  let fixture: ComponentFixture<AreLibI18nComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreLibI18nComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreLibI18nComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
