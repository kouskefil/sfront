import {Component, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule, MatIconButton} from '@angular/material/button';
import { MatTooltipModule} from '@angular/material/tooltip';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';

@Component({
  selector: 'app-home-page',
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatIconButton,
    MatButtonModule,
    MatTooltipModule,
    MatMenuItem,
    MatMenu,
    MatMenuTrigger
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  isCollapsed = false;

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;  // on ne ferme jamais, on compacte
  }

  user = {
    name: 'Kèfil KOUSSONDA',
    email: 'kefil.kouss@example.com'
  };

  currentWeek = 43;


}
