import { Routes } from '@angular/router';
import {Home} from './pages/home/home';
import {Features} from './pages/features/features';
import {Screenshots} from './pages/screenshots/screenshots';
import {Download} from './pages/download/download';

export const routeConfig: Routes = [
  { path: '', component: Home, title: 'Home Page'},
  { path: 'features', component: Features, title: 'Features Page'},
  { path: 'screenshots', component: Screenshots, title: 'Screenshots Page'},
  { path: 'download', component: Download, title: 'Download Page'},
];
