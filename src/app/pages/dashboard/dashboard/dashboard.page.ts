import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { logoIonic, homeOutline, documentOutline, bookOutline, cardOutline, documentTextOutline, newspaperOutline, starOutline, megaphoneOutline, schoolOutline, cashOutline, checkboxOutline, chatboxEllipsesOutline, mailOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class DashboardPage implements OnInit {

  constructor() { 
    addIcons({documentTextOutline,newspaperOutline,starOutline,megaphoneOutline,bookOutline,schoolOutline,cashOutline,checkboxOutline,chatboxEllipsesOutline,mailOutline,homeOutline,documentOutline,cardOutline,logoIonic});
  }

  ngOnInit() {
  }

}
