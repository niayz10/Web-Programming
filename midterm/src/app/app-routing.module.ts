import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WardropComponent } from './wardrop/wardrop.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/category', pathMatch: 'full' },
  { path:'category',component:WardropComponent},
  { path:'category/:id/products' , component:ProductListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
