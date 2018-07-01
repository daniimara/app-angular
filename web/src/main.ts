import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

declare var requirejs: any;

if (environment.production) {
  enableProdMode();
}

requirejs.config({
  baseUrl: '.'
});

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
