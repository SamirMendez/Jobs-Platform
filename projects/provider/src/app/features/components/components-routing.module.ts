import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'dashboard', loadChildren: () => import('./private/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'categories', loadChildren: () => import('./private/categories/categories.module').then(m => m.CategoriesModule) },
  { path: 'jobs', loadChildren: () => import('./private/jobs/jobs.module').then(m => m.JobsModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
