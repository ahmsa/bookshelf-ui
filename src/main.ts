import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { importProvidersFrom } from '@angular/core';
import { App } from './app/app';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { providePrimeNG } from 'primeng/config';
import { provideHttpClient } from '@angular/common/http';


bootstrapApplication(App, {
    providers: [
      importProvidersFrom(BrowserModule, AppRoutingModule), 
      providePrimeNG(),
      provideHttpClient()
    ]
})
  .catch(err => console.error(err));
