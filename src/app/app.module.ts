import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { from } from 'rxjs';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { JobdataService } from './shared/jobdata.service';
// import { BootstrapAlertModule } from 'ngx-bootstrap-alert';


@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, HomeComponent, TestComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, CarouselModule.forRoot(), ModalModule.forRoot(), BsDropdownModule.forRoot(), BrowserAnimationsModule, ReactiveFormsModule
  ],
  providers: [JobdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
