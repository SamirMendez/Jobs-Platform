import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'jobs'},
      { path: 'categories', loadChildren: () => import('../categories/categories.module').then(m => m.CategoriesModule) },
      { path: 'jobs', loadChildren: () => import('../jobs/jobs.module').then(m => m.JobsModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
