
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {  } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp } from 'ionicons/icons';
import { SharedModule } from './shared/shared.module';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [SharedModule, RouterLink, RouterLinkActive],
})
export class AppComponent {
  public appPages = [
    { title: 'Dashboard', url: '/main/apps', icon: 'mail' },
    { title: 'Home', url: '/main/dashboard/home', icon: 'mail' },
    { title: 'Student Profile', url: '/main/dashboard/student-profile', icon: 'paper-plane' },
    { title: 'Change Pin', url: '/main/dashboard/change-pin', icon: 'heart' },
    { title: 'School Profile', url: '/main/dashboard/school-profile', icon: 'archive' },
    { title: 'About', url: '/main/dashboard/about', icon: 'trash' },
    { title: 'Logout', url: '/main/dashboard/logout', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {
    addIcons({ mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp });
  }
}
