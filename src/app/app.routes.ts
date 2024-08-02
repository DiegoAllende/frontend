import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'inka-medic', pathMatch: 'full' },
  { path: "inka-medic", loadChildren: () => import('./modules/inka-medic/inka-medic.routes').then(r => r.routes) },
];
