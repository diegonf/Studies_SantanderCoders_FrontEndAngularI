import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomeComponent } from './nome.component';

describe('NomeComponent', () => {
  let component: NomeComponent;
  let fixture: ComponentFixture<NomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NomeComponent]
    });
    fixture = TestBed.createComponent(NomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
