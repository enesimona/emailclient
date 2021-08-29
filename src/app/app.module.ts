import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AuthHttpInterceptor } from './auth/auth-http-interceptor';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    AuthModule, 
    HttpClientModule,
    MatButtonModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}