import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logInForm!: FormGroup;
  error = false
  constructor(private router: Router, private fb: FormBuilder) { }
  ngOnInit(): void {
    this.logInForm = this.fb.group({
        username: ['', [Validators.required]],
        password: ['', [Validators.required]],
    })
  }
  onSubmit(){
    this.error = false
    if(!this.logInForm.valid){
      this.error = true
      console.log(this.error);
    }
    else{
      console.log('login');
      this.router.navigate(['/employee/list']);
    }
  }
}
