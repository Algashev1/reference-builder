import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManualSourceComponent } from './manual-source.component';
import { DynamicSourceFormComponent } from './components/dynamic-source-form/dynamic-source-form.component';

@NgModule({
  declarations: [
    ManualSourceComponent,
    DynamicSourceFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ManualSourceComponent]
})
export class ManualSourceModule { }
