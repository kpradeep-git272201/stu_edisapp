import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'sign-in', 
    pathMatch: 'full',
  },
  {
    path: 'sign-in',
    loadComponent: () => import('./authentication/sign-in/sign-in.page').then(m => m.SignInPage)
  },
  {
    path: 'main',
    loadChildren : () => import('./main/main.module').then( m => m.MainModule)
  },
  // {
  //   path: 'dashboard/:id',
  //   loadComponent: () =>
  //     import('./folder/folder.page').then(m => m.FolderPage),
  // },
  {
    path: 'sign-in',
    loadComponent: () => import('./authentication/sign-in/sign-in.page').then(m => m.SignInPage)
  },
  {
    path: 'pattern',
    loadComponent: () => import('./authentication/pattern/pattern.page').then( m => m.PatternPage)
  },
  {
    path: 'create-pin',
    loadComponent: () => import('./authentication/create-pin/create-pin.page').then( m => m.CreatePinPage)
  },
  {
    path: 'logout',
    loadComponent: () => import('./common/logout/logout.page').then( m => m.LogoutPage)
  },
  {
    path: 'student-profile',
    loadComponent: () => import('./common/student-profile/student-profile.page').then( m => m.StudentProfilePage)
  },
  {
    path: 'school-profile',
    loadComponent: () => import('./common/school-profile/school-profile.page').then( m => m.SchoolProfilePage)
  },
  {
    path: 'change-pin',
    loadComponent: () => import('./common/change-pin/change-pin.page').then( m => m.ChangePinPage)
  },
  {
    path: 'about',
    loadComponent: () => import('./common/about/about.page').then( m => m.AboutPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./common/home/home.page').then( m => m.HomePage)
  },



 
];
