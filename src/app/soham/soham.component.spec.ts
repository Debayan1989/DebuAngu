import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SohamComponent } from './soham.component';

describe('SohamComponent', () => {
  let component: SohamComponent;
  let fixture: ComponentFixture<SohamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SohamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SohamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
