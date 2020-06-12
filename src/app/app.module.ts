import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { DataService } from './data.service';
import { ExtendDataService } from './extend-data.service';
import { LoggerService } from './logger.service';
import { logServiceFactory } from './log-service.factory';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HomeComponent,
    ErrorPageComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProductModule,
    CartModule,
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  providers: [
    DataService,
    // OR {provide: DataService, useClass: DataService} more verbose way of writing the above
    { provide: DataService, useClass: ExtendDataService },
    ExtendDataService,
    { provide: DataService, useClass: ExtendDataService },
    {
      provide: DataService,
      // useValue: {
      //   sendData: (data) => console.log(data),
      //   error: (error) => console.log(error),
      // },
    },
    {
      provide: LoggerService,
      useFactory: logServiceFactory,
      deps: [DataService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
