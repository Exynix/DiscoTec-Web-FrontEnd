import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoDiscoComponent } from './info-disco.component';

describe('InfoDiscoComponent', () => {
  let component: InfoDiscoComponent;
  let fixture: ComponentFixture<InfoDiscoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoDiscoComponent]
    });
    fixture = TestBed.createComponent(InfoDiscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
