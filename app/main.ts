/*
Compiles the application with the JIT compiler and bootstraps the application to run in the browser.
*/

// import platformBrowserDynamic which is a JIT compiler.
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import our root module defined in app.module.ts
import { AppModule } from './app.module';

// boostrap (aka initialiaze) our app module using platformBrowserDynamic
platformBrowserDynamic().bootstrapModule(AppModule);
