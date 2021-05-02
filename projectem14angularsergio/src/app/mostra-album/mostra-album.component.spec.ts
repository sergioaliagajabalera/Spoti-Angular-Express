import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostraAlbumComponent } from './mostra-album.component';

describe('MostraAlbumComponent', () => {
  let component: MostraAlbumComponent;
  let fixture: ComponentFixture<MostraAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostraAlbumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostraAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
