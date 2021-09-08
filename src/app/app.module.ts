import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MatCheckboxModule } from '@angular/material/checkbox/checkbox-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CandidateService } from './services/candidate.service';
import { AppNewCandidateComponent } from './components/app-new-candidate/app-new-candidate.component';
import { AppCandidateComponent } from './components/app-candidate/app-candidate.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    AppNewCandidateComponent,
    AppCandidateComponent
  ],
  bootstrap: [AppComponent],
  providers: [CandidateService]
  // exports: [MatCheckboxModule]
})
export class AppModule {}
