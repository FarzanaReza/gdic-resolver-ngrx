import { EmployeeInfo } from '../app/models/employee.model';

export interface AppState {
  readonly employee: EmployeeInfo[];
}