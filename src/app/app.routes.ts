import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AppComponent } from './app.component';
import { isLoggedGuard } from './guards/is-logged.guard';
import { notLoggedGuard } from './guards/not-logged.guard';

export const routes: Routes = [
  {path: 'login', component: LoginComponent, canActivate: [notLoggedGuard]},
  {path: 'register', component: RegisterComponent, canActivate: [notLoggedGuard]},
  {path: '', component: AppComponent, canActivate: [isLoggedGuard]}
];
