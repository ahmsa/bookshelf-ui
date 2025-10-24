import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-menu-component',
  standalone: true,
  imports: [MatMenuModule, MatButtonModule, RouterModule],
  templateUrl: './main-menu-component.html',
  styleUrls: ['./main-menu-component.css']
})
export class MainMenuComponent {

}
