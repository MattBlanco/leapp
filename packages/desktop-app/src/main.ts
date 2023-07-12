import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import "reflect-metadata";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";

import * as Sentry from "@sentry/angular-ivy";
import packageJson from "../package.json";

Sentry.init({
  dsn: "https://aa564ccb1b814773b714a09d3124b6d2@o4505227798183936.ingest.sentry.io/4505233326145536", // "https://e0d20cedc35048dbaac9ab857b3f49f8@o4505232294805504.ingest.sentry.io/4505232356737024",
  release: packageJson.version,
  beforeBreadcrumb: (_breadcrumb, _hint) => null,
  beforeSend: (event, _hint) => {
    event.user = null;
    event.tags = event.tags["user"] = null;
    return event;
  },
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
//.catch((err) => console.error(err));
