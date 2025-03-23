import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  standalone: true,
  imports: [SharedModule, IonicModule, RouterLink, RouterLinkActive],
})
export class SideMenuComponent {
  public appPages = [
    { title: 'Home', url: '/dashboard/home', icon: 'home' },
    { title: 'Student Profile', url: '/dashboard/studentprofile', icon: 'person' },
    { title: 'Change Pin', url: '/dashboard/changepin', icon: 'key' },
    { title: 'School Profile', url: '/dashboard/schoolprofile', icon: 'school' },
    { title: 'About', url: '/dashboard/about', icon: 'information-circle' },
    { title: 'Logout', url: '/dashboard/logout', icon: 'log-out' },
  ];

  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
}
