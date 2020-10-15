import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutViewComponent } from './donut-view.component';

describe('DonutViewComponent', () => {
  let component: DonutViewComponent;
  let fixture: ComponentFixture<DonutViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonutViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonutViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
