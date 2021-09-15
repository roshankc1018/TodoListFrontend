import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { InputsModule } from '@progress/kendo-angular-inputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectlistComponent } from './projectlist/projectlist.component';
import { MatTableModule } from '@angular/material/table';
import { DataService } from '@progress/kendo-angular-dropdowns';

@NgModule({
  declarations: [AppComponent, LoginComponent, LoadingSpinnerComponent, ProjectsComponent, ProjectlistComponent],
  imports: [
    BrowserModule,
    MatTableModule,
    AppRoutingModule,
    InputsModule,
    BrowserAnimationsModule,
    GridModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
