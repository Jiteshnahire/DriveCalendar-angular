import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './PageNotFound/page-not-found.component';

const routes: Routes = [
  {path:'',pathMatch:"full",redirectTo:'login'},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'drive',loadChildren:() => import('./Drive/drive.module').then(m => m.DriveModule)},
  {path:'Student',loadChildren:() => import('./Student/student.module').then(m => m.StudentModule)},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
