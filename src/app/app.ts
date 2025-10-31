import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Banner } from './banner/banner';
import { MainMenu } from "./banner/main-menu-component/main-menu";

@Component({
    selector: 'app-root',
    templateUrl: './app.html',
    styleUrls: ['./app.css'],
    imports: [Banner, RouterOutlet, MainMenu]
})
export class App {
  title = 'bookshelf-ui';
}
