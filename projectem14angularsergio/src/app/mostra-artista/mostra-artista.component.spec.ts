import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostraArtistaComponent } from './mostra-artista.component';

describe('MostraArtistaComponent', () => {
  let component: MostraArtistaComponent;
  let fixture: ComponentFixture<MostraArtistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostraArtistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostraArtistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
