import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BasicComponent } from "./basic/basic.component";
import { RegisterComponent } from "./auth/components/register/register.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BasicComponent, RegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'formcontrol-tut';
}
