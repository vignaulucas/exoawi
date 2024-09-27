import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { RouterComponent } from './components/router/router.component';

bootstrapApplication(RouterComponent, appConfig)
  .catch((err) => console.error(err));
