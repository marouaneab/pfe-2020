import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './main-page/dashboard.component';
import { SuperSecretComponent } from './super-secret/super-secret.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  
  { path: 'secret', component: SuperSecretComponent, canActivate: [AuthGuard] ,pathMatch : 'full'},
  {path: 'dashboard',component: DashboardComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
