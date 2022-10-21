import { Action } from '@ngrx/store'
import { EmployeeInfo } from '../models/employee.model'
import * as EmployeeActions from '../actions/employee.actions'

// Section 1
const initialState: EmployeeInfo = {
    firstName: 'asas',
    lastName: 'asas',
    dob: new Date('1/1/1997'),
    phone: 9878787878,
    gender: 'Female',

}

// Section 2
export function reducer(state: EmployeeInfo[] = [initialState], action: EmployeeActions.Actions) {

    // Section 3
    switch(action.type) {
        case EmployeeActions.ADD_EMPLOYEE:
            return [...state, action.payload];
        default:
            return state;
    }
}