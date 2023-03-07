import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatoComponent } from './calculato.component';

describe('CalculatoComponent', () => {
  let component: CalculatoComponent;
  let fixture: ComponentFixture<CalculatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
