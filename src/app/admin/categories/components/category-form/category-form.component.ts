import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  Validators,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { CategoriesService } from '../../../../services/categories.service';

@Component({
  selector: 'app-category-form',
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
    MatRadioGroup,
  ],
  templateUrl: './category-form.component.html',
  styleUrl: './category-form.component.css',
})
export class CategoryFormComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private catSer: CategoriesService,
    //private rt: Router
  ) {
    this.buildForm();
  }

  ngOnInit(): void {}

  private buildForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      image: ['', [Validators.required]],
    });
  }

  get nameField() {
    return this.form.get('name');
  }

  get imageField() {
    return this.form.get('image');
  }

  save() {
    if (this.form.valid) {
      this.createCategory();
    } else {
      this.form.markAllAsTouched();
    }
  }

  private createCategory() {
    const data = this.form.value;
    this.catSer.createCategory(data).subscribe(rta => {
      console.log(rta)
      /* valio madres no se como funciona el router
      this.router.navigate(['./admin/categories'])
      */
    });
  }
}
