// Section 1
import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { EmployeeInfo } from '../models/employee.model'

// Section 2
export const ADD_EMPLOYEE       = '[EMPLOYEE] Add'
// export const REMOVE_TUTORIAL    = '[TUTORIAL] Remove'

// Section 3
export class AddEmployee implements Action {
    readonly type = ADD_EMPLOYEE

    constructor(public payload: EmployeeInfo) {}
}

// export class RemoveTutorial implements Action {
//     readonly type = REMOVE_TUTORIAL

//     constructor(public payload: number) {}
// }

// Section 4
export type Actions = AddEmployee 