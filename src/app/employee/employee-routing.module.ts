import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeResolverService } from '../resolvers/employee-resolver.service';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListEmployeeComponent,
    resolve: { employees: EmployeeResolverService }
  },
  {
    path: 'new',
    component: NewEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
