import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { from } from 'rxjs';
import { GetjobComponent } from './getjob/getjob.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CandidateprofileComponent } from './candidateprofile/candidateprofile.component';
import { EmployerprofileComponent } from './employerprofile/employerprofile.component';
import { PostnewjobComponent } from './postnewjob/postnewjob.component';
import { HirenowComponent } from './hirenow/hirenow.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path: '', redirectTo: "home", pathMatch: "full"
  },
  {
    path: "home", component: HomeComponent
  },
  {
    path: "test", component: TestComponent
  },
  {
    path: "getjob", component: GetjobComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'candidateProfile/:email', component: CandidateprofileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'employerProfile/:email', component: EmployerprofileComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'postnewjob', component: PostnewjobComponent
  },
  {
    path: 'hirenow', component: HirenowComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
