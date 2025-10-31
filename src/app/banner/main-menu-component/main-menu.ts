import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [MatMenuModule, MatButtonModule, RouterModule],
  templateUrl: './main-menu.html',
  styleUrls: ['./main-menu.css']
})
export class MainMenu {

}
