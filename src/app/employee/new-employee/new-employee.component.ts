import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControlName,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
// import { Store } from '@ngrx/store';
// import { EmployeeInfo } from '../models/employee.model'
import { AppState } from '../../app.state';
import { EmployeeInfo } from 'src/app/models/employee.model';
// import * as EmployeeActions from '../actions/employee.actions'

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {
  empForm!: FormGroup;
  profileTab:any
  profileBtn:any
  skillsTab:any
  skillBtn:any
  pervTab:any
  prevBtn:any
  succ_msg = false
  errorTab1 = false
  errorTab2 = false
  constructor(private fb: FormBuilder, 
    // private store: Store<AppState>
    ) { }

  ngOnInit(): void {
    
    this.empForm = this.fb.group({
      info:this.fb.group({
        firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
        lastName: [''],
        dob: ['',[ Validators.required]],
        phone: ['',[ Validators.required, Validators.pattern('0-9'), Validators.minLength(11), Validators.maxLength(11)]],
        gender: ['',[ Validators.required]],
      }), 
      skills:this.fb.group({
        skillName: ['',[ Validators.required]],
        experience: ['',[ Validators.required]],
        skillLevel: ['',[ Validators.required]]
      })
    });
  }
  tab1Next(){
    this.succ_msg = false
    if(!this.empForm.controls.info.value.firstName && !this.empForm.controls.info.value.dob  && !this.empForm.controls.info.value.phone && !this.empForm.controls.info.value.gender){      
      this.errorTab1 = true
    }
    else{
      this.profileTab = document.getElementById("pills-profile")
      this.profileBtn = document.getElementById("pills-profile-tab")
      this.profileTab.classList.remove('active')
      this.profileTab.classList.remove('show')
      this.profileBtn.classList.remove('active')
  
      this.skillsTab = document.getElementById("pills-skill")
      this.skillBtn = document.getElementById("pills-skill-tab")
      this.skillsTab.classList.add('active')
      this.skillsTab.classList.add('show')
      this.skillBtn.classList.add('active')
      this.errorTab1 = false
    }

  }
  tab2Next(){
    this.succ_msg = false
    if(!this.empForm.controls.skills.value.skillName && !this.empForm.controls.skills.value.experience && !this.empForm.controls.skills.value.skillLevel){      
      this.errorTab2 = true
    }
    else{
      this.pervTab = document.getElementById("pills-prev")
      this.prevBtn = document.getElementById("pills-prev-tab")
      this.pervTab.classList.add('active')
      this.pervTab.classList.add('show')
      this.prevBtn.classList.add('active')

      this.skillsTab = document.getElementById("pills-skill")
      this.skillBtn = document.getElementById("pills-skill-tab")
      this.skillsTab.classList.remove('active')
      this.skillsTab.classList.remove('show')
      this.skillBtn.classList.remove('active')
      this.errorTab2 = false
    }
  }
  onSubmit(){
    console.log(this.empForm.value);
    this.empForm.reset();
    this.succ_msg = true
    console.log(this.empForm.value);
  
    this.pervTab = document.getElementById("pills-prev")
    this.prevBtn = document.getElementById("pills-prev-tab")
    this.pervTab.classList.remove('active')
    this.pervTab.classList.remove('show')
    this.prevBtn.classList.remove('active')

    this.profileTab = document.getElementById("pills-profile")
    this.profileBtn = document.getElementById("pills-profile-tab")
    this.profileTab.classList.add('active')
    this.profileTab.classList.add('show')
    this.profileBtn.classList.add('active')
    this.errorTab1 = false
    this.errorTab1 = false

    // this.store.dispatch(new EmployeeActions.AddEmployee({
    //   firstName: this.empForm.controls.info.value.firstName,
    //   lastName: this.empForm.controls.info.value.lastName,
    //   dob: this.empForm.controls.info.value.dob,
    //   phone: this.empForm.controls.info.value.phone,
    //   gender: this.empForm.controls.info.value.gender,
    // }) )
  }
}
