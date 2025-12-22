import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-basic',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './basic.component.html',
  styleUrl: './basic.component.css'
})
export class BasicComponent implements OnInit {

  nameField = new FormControl('', [Validators.required, Validators.maxLength(10)]);
  emailField = new FormControl('')
  phoneField = new FormControl('')
  colorField = new FormControl('')
  dateField = new FormControl('')
  numberField = new FormControl('')

  // selects 

  categroyField = new FormControl('')
  tagField = new FormControl('')

  //checkboxes y radios

  agreedField = new FormControl(false)
  genderField = new FormControl('')
  zoneField = new FormControl('')

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

}
