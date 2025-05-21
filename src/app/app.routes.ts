import { Routes } from '@angular/router';
import { ManualSourceComponent } from './manual-source/manual-source.component';
import { DynamicSourceFormComponent } from './manual-source/components/dynamic-source-form/dynamic-source-form.component';
import { ImportSourceComponent } from './import-source/import-source.component';

export const routes: Routes = [
  { path: '', redirectTo: 'manual-source', pathMatch: 'full' },
  { path: 'manual-source', component: ManualSourceComponent },
  { path: 'manual-source/:type', component: DynamicSourceFormComponent },
  { path: 'import-source', component: ImportSourceComponent }
];
