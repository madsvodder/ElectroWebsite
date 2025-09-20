import { Component } from '@angular/core';
import {Feature} from '../../components/feature/feature';

@Component({
  selector: 'app-features',
  imports: [
    Feature
  ],
  templateUrl: './features.html',
  styleUrl: './features.css'
})
export class Features {

}
