import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostraPistaComponent } from './mostra-pista.component';

describe('MostraPistaComponent', () => {
  let component: MostraPistaComponent;
  let fixture: ComponentFixture<MostraPistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostraPistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostraPistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
