import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreLibComunicationsComponent } from './are-lib-comunications.component';

describe('AreLibComunicationsComponent', () => {
  let component: AreLibComunicationsComponent;
  let fixture: ComponentFixture<AreLibComunicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreLibComunicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreLibComunicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
