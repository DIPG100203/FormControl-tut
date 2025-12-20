import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BasicComponent } from "./basic/basic.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BasicComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'formcontrol-tut';
}
