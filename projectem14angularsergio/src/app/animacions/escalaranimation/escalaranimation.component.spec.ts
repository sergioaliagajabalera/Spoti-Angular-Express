import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscalaranimationComponent } from './escalaranimation.component';

describe('EscalaranimationComponent', () => {
  let component: EscalaranimationComponent;
  let fixture: ComponentFixture<EscalaranimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscalaranimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscalaranimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
