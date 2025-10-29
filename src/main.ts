import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { importProvidersFrom } from '@angular/core';
import { App } from './app/app';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { providePrimeNG } from 'primeng/config';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from "@angular/platform-browser/animations";


bootstrapApplication(App, {
    providers: [
      importProvidersFrom(BrowserModule, AppRoutingModule),
      providePrimeNG(),
      provideHttpClient(),
      provideAnimations()
    ]
})
  .catch(err => console.error(err));
