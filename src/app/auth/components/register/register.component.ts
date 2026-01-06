import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormGroup, Form, FormBuilder, Validators, UntypedFormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CustomValidator } from '../../../validators/custom.validator';
import { MatRadioButton, MatRadioGroup } from "@angular/material/radio";


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatRadioButton,
    MatRadioGroup
],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{

  form!: UntypedFormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.buildForm();
  }

  ngOnInit() {
    
  }

  register() {

    if (this.form.valid) {
      const value = this.form.value;
      console.log('Registering user with email:', value.email);
      // Aquí iría la lógica para registrar al usuario, como llamar a un servicio

    }

  }

  private buildForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), CustomValidator.validPasword]],
      confirmPassword: ['', [Validators.required]],
      type: ['company', [Validators.required]],
      companyName: ['', [Validators.required]]
    }, {
      validators: CustomValidator.matchPasswords
    });

    this.typeField?.valueChanges
    .subscribe(value => {
      console.log('Type changed to:', value);
      if (value === 'company') {
        this.companyNameField?.setValidators([Validators.required])
      }
      else {
        this.companyNameField?.setValidators(null)
      }
      this.companyNameField?.updateValueAndValidity()
    })
  }

  get typeField() {
    return this.form.get('type');
  }

  get companyNameField() {
    return this.form.get('companyName');
  }
}
