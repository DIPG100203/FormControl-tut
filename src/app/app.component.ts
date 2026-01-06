import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BasicComponent } from "./admin/categories/components/basic/basic.component";
import { RegisterComponent } from "./auth/components/register/register.component";
import { CategoryFormComponent } from "./admin/categories/components/category-form/category-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BasicComponent, RegisterComponent, CategoryFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'formcontrol-tut';
}
