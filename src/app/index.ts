// App
export * from './app.component';
export * from './app.service';
export * from './app.routes';

import { AppState } from './app.service';
import * as services from './services';

const mapValuesToArray = (obj) => Object.keys(obj).map(key => obj[key]);

// Application wide providers
export const APP_PROVIDERS = [
  AppState,
  ...mapValuesToArray(services)
];
