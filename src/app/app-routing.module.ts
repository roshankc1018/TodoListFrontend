import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/authGuard';
import { LoginComponent } from './login/login.component';

import { ProjectlistComponent } from './projectlist/projectlist.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'projects', component: ProjectsComponent, canActivate: [AuthGuard] },
  { path: ':id', component: ProjectlistComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
