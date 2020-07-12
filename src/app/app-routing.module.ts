import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UfmRoutes} from "./ufm/ufm.routes";
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

const routes:Routes = [
  { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
  ...UfmRoutes,
  {
    path: '**',
    redirectTo: 'ufm'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
