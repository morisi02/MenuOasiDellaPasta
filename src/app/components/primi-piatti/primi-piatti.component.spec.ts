import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimiPiattiComponent } from './primi-piatti.component';

describe('PrimiPiattiComponent', () => {
  let component: PrimiPiattiComponent;
  let fixture: ComponentFixture<PrimiPiattiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimiPiattiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimiPiattiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
