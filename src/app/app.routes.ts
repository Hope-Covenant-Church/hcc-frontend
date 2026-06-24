import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.HomePage),
    title: 'Home | Hope Covenant Church'
  },
  {
    path: 'about-us',
    loadComponent: () => import('./pages/about/about').then(m => m.AboutPage),
    title: 'About Us | Hope Covenant Church'
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/ministries/ministries').then(m => m.MinistriesPage),
    title: 'Ministries | Hope Covenant Church'
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/sermons/sermons').then(m => m.SermonsPage),
    title: 'Sermons | Hope Covenant Church'
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then(m => m.ContactPage),
    title: 'Contact | Hope Covenant Church'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
