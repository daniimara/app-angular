import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ErrorInterceptor } from '../../services/error.interceptor';
import { AccessRoutingModule } from './access-routing.module';
import { LoginComponent } from './login/login.component';
import { LoginService } from './services/login.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    AccessRoutingModule
  ],
  declarations: [LoginComponent],
  providers: [
    LoginService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ]
})
export class AccessModule {}
