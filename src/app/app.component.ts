import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { MainMenuComponent } from "./banner/main-menu-component/main-menu-component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [BannerComponent, RouterOutlet, MainMenuComponent]
})
export class AppComponent {
  title = 'bookshelf-ui';
}
