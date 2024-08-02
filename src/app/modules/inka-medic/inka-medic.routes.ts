import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./inka-medic.component').then(c => c.InkaMedicComponent) }
];
