import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { PreloadAllModules, provideRouter, withComponentInputBinding, withDebugTracing, withPreloading } from '@angular/router';
import { ROUTES } from '@app/app.routes';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { DataService } from '@app/core/services/data.service';


// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

bootstrapApplication(AppComponent, 
  {
    providers: [
      // importProvidersFrom(HttpClientModule),
      provideZoneChangeDetection({ eventCoalescing: true }), 
      provideRouter(ROUTES, withDebugTracing(), withPreloading(PreloadAllModules), withComponentInputBinding()),
      provideHttpClient(withInterceptorsFromDi()),
      importProvidersFrom(
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          },
          defaultLanguage: "da"
        })
      ),
      DataService,
    ]
  }
)
  .catch((err) => console.error(err));
