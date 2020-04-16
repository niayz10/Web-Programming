import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VacancyServiceService } from './vacancy-service.service'
import { CompaniesComponent } from './companies/companies.component';
import { VacancyComponent } from './vacancy/vacancy.component';


const routes: Routes = [
  { path: '', redirectTo: '/companies', pathMatch: 'full' },
  { path: 'companies', component: CompaniesComponent },
  { path: 'companies/:companyID/vacancies', component: VacancyComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
