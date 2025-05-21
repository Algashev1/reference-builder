import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicSourceFormComponent } from './dynamic-source-form.component';

describe('DynamicSourceFormComponent', () => {
  let component: DynamicSourceFormComponent;
  let fixture: ComponentFixture<DynamicSourceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicSourceFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicSourceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
