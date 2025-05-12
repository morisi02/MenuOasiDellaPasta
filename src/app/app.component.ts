import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimiPiattiModule } from "./components/primi-piatti/primi-piatti.module";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PrimiPiattiModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Menu Oasi Della Pasta';
}
