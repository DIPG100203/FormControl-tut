import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-basic',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './basic.component.html',
  styleUrl: './basic.component.css'
})
export class BasicComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl(''),
    color: new FormControl(''),
    date: new FormControl(''),
    number: new FormControl(''),

    category: new FormControl(''),
    tag: new FormControl(''),

    agreed: new FormControl(false),
    gender: new FormControl(''),
    zone: new FormControl('')
  })


  // ejercicio 1

  seguroField = new FormControl(false)
  preferenciaField = new FormControl('')

  constructor() {}

  ngOnInit(): void {
    // escuchar los cambios en el valor del campo en tiempo real
    this.nameField.valueChanges
    .subscribe(value => {
      console.log(value);
    })
  }


  // método para obtener el valor del campo al hacer clic en el botónn
  getNameValue() {
    console.log(this.nameField.value);
  }

  //ejercicio 2: desarrollar un metodo que no permita enviar datos si estan vacios o invalidos

  save(event: Event) {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      return
    }
    console.log(this.form.value)
  }

  /* save(event: Event) {
    console.log(this.form.value)
  } */
 

  get nameField() {
    return this.form.get('name')!;
  }

  get emailField() {
    return this.form.get('email')!;
  }

  get phoneField() {
    return this.form.get('phone')!;
  }

  get colorField() {
    return this.form.get('color')!;
  }

  get dateField() {
    return this.form.get('date')!;
  }

  get numberField() {
    return this.form.get('number')!;
  }

  get categoryField() {
    return this.form.get('category')!;
  }

  get tagField() {
    return this.form.get('tag')!;
  }

  get agreedField() {
    return this.form.get('agreed')!;
  }

  get genderField() {
    return this.form.get('gender')!;
  }

  get zoneField() {
    return this.form.get('zone')!;
  }

  get isNameFieldValid() {
    return this.nameField.touched && this.nameField.valid
  }

  get isNameFieldInvalid() {
    return this.nameField.touched && this.nameField.invalid
  }

  // ejercicio 2 aqui seria para el correo

  get isEmailFieldValid() {
    return this.emailField.touched && this.emailField.valid
  }

  get isEmailFieldInvalid() {
    return this.emailField.touched && this.emailField.invalid
  }

}
