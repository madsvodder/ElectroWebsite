import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-welcome-box',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './welcome-box.html',
  styleUrl: './welcome-box.css'
})
export class WelcomeBox {

}
