import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualSourceComponent } from './manual-source.component';

describe('ManualSourceComponent', () => {
  let component: ManualSourceComponent;
  let fixture: ComponentFixture<ManualSourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManualSourceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManualSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
