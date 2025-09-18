import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Navbar} from './components/navbar/navbar';
import {WelcomeBox} from './components/welcome-box/welcome-box';
import {Home} from './pages/home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ElectroWebsite');
}
