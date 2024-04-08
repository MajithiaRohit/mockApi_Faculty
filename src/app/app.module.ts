import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FacultyDataComponent } from './components/faculty-data/faculty-data.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AddFacultyComponent } from './components/add-faculty/add-faculty.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    FacultyDataComponent,
    AddFacultyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    SweetAlert2Module.forRoot(),
    FormsModule,
    // NgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
