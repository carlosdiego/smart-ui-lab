import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResourceRoutePath, TDetailResourceComponent, TEditResourceComponent, TGridResourceComponent } from '@smart-ui/ng-components';

import { CompaniesComponent } from './companies.component';

const routes: Routes = [
  {
    path: 'companies', component: CompaniesComponent,
    children: [
      { path: ResourceRoutePath.list, component: TGridResourceComponent },
      { path: ResourceRoutePath.new, component: TEditResourceComponent },
      { path: `${ResourceRoutePath.new}/:id`, component: TEditResourceComponent },
      { path: ResourceRoutePath.edit, component: TEditResourceComponent },
      { path: ResourceRoutePath.detail, component: TDetailResourceComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompaniesRoutingModule { }
