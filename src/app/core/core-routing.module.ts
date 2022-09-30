import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    // Route to Dashboard
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    // Route to Doctor Area
    path: 'doctor',
    loadChildren: () => import('../modules/doctor/doctor.module')
    .then(mod => mod.DoctorModule)
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
