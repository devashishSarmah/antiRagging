import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentConstructionComponent } from './incident-construction.component';

describe('IncidentConstructionComponent', () => {
  let component: IncidentConstructionComponent;
  let fixture: ComponentFixture<IncidentConstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ IncidentConstructionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncidentConstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
