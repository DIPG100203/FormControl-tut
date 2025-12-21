import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-basic',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './basic.component.html',
  styleUrl: './basic.component.css'
})
export class BasicComponent implements OnInit {

  nameField = new FormControl(' ');
  emailField = new FormControl('')
  phoneField = new FormControl('')
  colorField = new FormControl('')
  dateField = new FormControl('')
  numberField = new FormControl('')

  // selects 

  categroyField = new FormControl('')
  tagField = new FormControl('')

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
