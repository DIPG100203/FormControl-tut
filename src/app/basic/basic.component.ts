import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {
  FormControl,
  ReactiveFormsModule,
  Validators,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';

@Component({
  selector: 'app-basic',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [MatDatepickerModule],
  templateUrl: './basic.component.html',
  styleUrl: './basic.component.css',
})
export class BasicComponent implements OnInit {
  form!: FormGroup;

  // ejercicio 1

  seguroField = new FormControl(false);
  preferenciaField = new FormControl('');

  constructor(private fb: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {
    // escuchar los cambios en el valor del campo en tiempo real
    this.nameField.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  // método para obtener el valor del campo al hacer clic en el botónn
  getNameValue() {
    console.log(this.nameField.value);
  }

  //ejercicio 2: desarrollar un metodo que no permita enviar datos si estan vacios o invalidos

  save(event: Event) {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value);
  }

  /* save(event: Event) {
    console.log(this.form.value) <-- aqui iria el codigo original
  } */

  private buildForm() {
    this.form = this.fb.group({
      fullName: this.fb.group({
        name: [
          '',
          [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(10),
            Validators.pattern('[a-zA-Z ]*'),
          ],
        ],
        lastName: [
          '',
          [
            Validators.required,
            Validators.minLength(1),
            Validators.pattern('[a-zA-Z ]*'),
          ],
        ],
      }),
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      color: ['#000000'],
      date: [''],
      number: [
        0,
        [Validators.required, Validators.min(18), Validators.max(100)],
      ],
      category: [''],
      tag: [''],

      agreed: [false, Validators.requiredTrue],
      gender: [''],
      zone: [''],
    });
  }

  get nameField() {
    return this.form.get('fullName.name')!;
  }

  get lastNameField() {
    return this.form.get('fullName.lastName')!;
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
    return this.nameField.touched && this.nameField.valid;
  }

  get isNameFieldInvalid() {
    return this.nameField.touched && this.nameField.invalid;
  }

  // ejercicio 2 aqui seria para el correo

  get isEmailFieldValid() {
    return this.emailField.touched && this.emailField.valid;
  }

  get isEmailFieldInvalid() {
    return this.emailField.touched && this.emailField.invalid;
  }

  get isPhoneFieldValid() {
    return this;
  }

  get isPhoneFieldInvalid() {
    return this.phoneField.touched && this.phoneField.invalid;
  }

  get isNumberFieldValid() {
    return this.numberField.touched && this.numberField.valid;
  }

  get isNumberFieldInvalid() {
    return this.numberField.touched && this.numberField.invalid;
  }
}
