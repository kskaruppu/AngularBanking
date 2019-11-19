import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeneficiaryModule } from './beneficiary/beneficiary.module';
import { UserModule } from './user/user.module';
import { ProfileResolve } from './guards/profileResolve';
import { HttpErrorHandler } from './http-error-handler.service';
import { FundstransferModule } from './fundstransfer/fundstransfer.module';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BeneficiaryModule,
    UserModule,
    HttpClientModule,
    FundstransferModule
  ],
  providers: [ProfileResolve,HttpErrorHandler],
  bootstrap: [AppComponent]
})
export class AppModule { }
