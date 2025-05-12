import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportSourceComponent } from './import-source.component';

describe('ImportSourceComponent', () => {
  let component: ImportSourceComponent;
  let fixture: ComponentFixture<ImportSourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImportSourceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
