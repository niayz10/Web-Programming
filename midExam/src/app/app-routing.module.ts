import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JobsListComponent } from './jobs-list/jobs-list.component';
import { JobDetailComponent } from './job-detail/job-detail.component'

const routes: Routes = [
  { path: '', redirectTo: '/jobs', pathMatch: 'full' },
  { path:'jobs' , component:JobsListComponent},
  { path:'jobs/:id' , component:JobDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
