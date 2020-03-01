import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { Page2Component } from "./page2/page2.component";
import { Page3Component } from "./page3/page3.component";
import { Page4Component } from './page4/page4.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, Page2Component, Page3Component, Page4Component],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
