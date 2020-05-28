import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { from } from 'rxjs';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JobdataService } from './shared/jobdata.service';
import { GetjobComponent } from './getjob/getjob.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
// import { BootstrapAlertModule } from 'ngx-bootstrap-alert';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { RegisterdataService } from './registerdata.service';
import { ProfileEmpComponent } from './profile-emp/profile-emp.component';
import { CandidateprofileComponent } from './candidateprofile/candidateprofile.component';
import { EmployerprofileComponent } from './employerprofile/employerprofile.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { PostnewjobComponent } from './postnewjob/postnewjob.component';
import { HirenowComponent } from './hirenow/hirenow.component';
import { AuthGuard } from './auth.guard';
@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent,
    HomeComponent, TestComponent, GetjobComponent, LoginComponent,
    RegisterComponent, ProfileEmpComponent,
    CandidateprofileComponent,
    EmployerprofileComponent,
    PostnewjobComponent,
    HirenowComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, CarouselModule.forRoot(),
    ModalModule.forRoot(), BsDropdownModule.forRoot(),
    BrowserAnimationsModule, ReactiveFormsModule, TabsModule.forRoot(), AlertModule.forRoot()
  ],
  providers: [JobdataService, RegisterdataService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
