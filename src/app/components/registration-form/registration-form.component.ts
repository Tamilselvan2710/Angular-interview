import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

 
@Component({
  selector: 'app-registration-form',
  standalone: false,
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.css'
})
export class RegistrationFormComponent {
  registerForm: FormGroup;
  submitted = false;

  constructor (private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(1)]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword:['', Validators.required],
      terms: ['false', Validators.requiredTrue],
    }, { Validator: this.passwordMatchvalidator});
  }

  passwordMatchvalidator(form: FormGroup) {
    return form.get('password')!.value === form.get('confirmpassword')!.value ? null : { mismatch: true}
  }

  onSubmit() {
    this.submitted = true;
    if(this.registerForm.valid) {
      console.log('form Data:', this.registerForm.value);
      alert('Registration Successful!');
    }
  }
}
