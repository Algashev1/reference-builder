import { Routes } from '@angular/router';
import { ManualSourceComponent } from './manual-source/manual-source.component';
import { ImportSourceComponent } from './import-source/import-source.component';

export const routes: Routes = [
  { path: 'manual-source', component: ManualSourceComponent },
  { path: 'import-source', component: ImportSourceComponent },
  { path: '', redirectTo: '/manual-source', pathMatch: 'full' } // Редирект на первую вкладку
];
