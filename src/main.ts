import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { importProvidersFrom } from '@angular/core';
import { App } from './app/app';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { providePrimeNG } from 'primeng/config';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideRouter, withComponentInputBinding } from "@angular/router";
import { routes } from "./app/app.routes";


bootstrapApplication(App, {
    providers: [
      importProvidersFrom(BrowserModule),
      providePrimeNG(),
      provideHttpClient(),
      provideAnimations(),
      provideRouter(routes, withComponentInputBinding())

    ]
})
  .catch(err => console.error(err));
