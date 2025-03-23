import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// const routes: Routes = [
//   {
//     path: 'apps',
//     loadComponent: () => import('./dashboard/dashboard.page').then(m => m.DashboardPage)
//   },
//   {
//     path: 'dashboard',
//     loadComponent: () => import('./dashboard/dashboard.page').then(m => m.DashboardPage)
//   },
//   {
//     path: 'dashboard/:id',
//     loadComponent: () =>
//       import('../folder/folder.page').then(m => m.FolderPage),
//   },
// ];

const routes: Routes = [
  {
    path: 'apps',
    loadComponent: () => import('./dashboard/dashboard.page').then(m => m.DashboardPage)
  },
  {
    path: 'dashboard',
    children: [
      {
        path: '',
        loadComponent: () => import('./dashboard/dashboard.page').then(m => m.DashboardPage)
      },
      {
        path: 'home',
        loadComponent: () => import('../common/home/home.page').then(m => m.HomePage) // ✅ Home Page Added
      },
      {
        path: 'student-profile',
        loadComponent: () => import('../common/student-profile/student-profile.page').then(m => m.StudentProfilePage)
      },
      {
        path: 'change-pin',
        loadComponent: () => import('../common/change-pin/change-pin.page').then(m => m.ChangePinPage)
      },
      {
        path: 'school-profile',
        loadComponent: () => import('../common/school-profile/school-profile.page').then(m => m.SchoolProfilePage)
      },
      {
        path: 'about',
        loadComponent: () => import('../common/about/about.page').then(m => m.AboutPage)
      },
      {
        path: 'logout',
        loadComponent: () => import('../common/logout/logout.page').then(m => m.LogoutPage)
      }
    ]
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
