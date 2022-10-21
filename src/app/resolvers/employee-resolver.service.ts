import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeResolverService implements Resolve<any> {
  constructor(private apiService: ApiService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    // console.log('Called Get Employees in resolver...', route);
    return this.apiService.getEmployees().pipe(
      catchError(error => {
        return of('No data');
      })
    );
  }
}