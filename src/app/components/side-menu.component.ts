import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { addIcons } from 'ionicons';
import { mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp } from 'ionicons/icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  imports: [CommonModule, RouterModule, SharedModule, RouterModule ]
})
export class SideMenuComponent  implements OnInit {

  public appPages = [
    { title: 'Dashboard', url: '/apps/dashboard', icon: 'mail' },
    { title: 'Home', url: '/apps/dashboard/home', icon: 'mail' },
    { title: 'Student Profile', url: '/apps/student-profile', icon: 'paper-plane' },
    { title: 'Change Pin', url: '/apps/change-pin', icon: 'heart' },
    { title: 'School Profile', url: '/apps/school-profile', icon: 'archive' },
    { title: 'About', url: '/apps/about', icon: 'trash' },
    { title: 'Logout', url: '/apps/logout', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor() {
    console.log("Side Menu");
    addIcons({ mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp });
  }

  ngOnInit() {}

}
