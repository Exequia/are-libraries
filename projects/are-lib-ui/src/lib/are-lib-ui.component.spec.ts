import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreLibUiComponent } from './are-lib-ui.component';

describe('AreLibUiComponent', () => {
  let component: AreLibUiComponent;
  let fixture: ComponentFixture<AreLibUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreLibUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreLibUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
