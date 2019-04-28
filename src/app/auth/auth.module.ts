import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [CommonModule, AuthRoutingModule],
  exports: [],
  declarations: [LoginComponent, RegisterComponent],
  providers: [],
})
export class AuthModule {}
