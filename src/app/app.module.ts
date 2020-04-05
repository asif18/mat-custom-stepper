import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import MaterialModule from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { StepItemComponent } from './registration-stepper-components/step-item/step-item.component';
import { StepTemplateBaseComponent } from './registration-stepper-components/step-template-base';
import { PersonalInfoComponent } from './registration-stepper-components/personal-info/personal-info.component';
import { EducationalInfoComponent } from './registration-stepper-components/educational-info/educational-info.component';
import { OfficialInfoComponent } from './registration-stepper-components/official-info/official-info.component';
import { VehicleInfoComponent } from './registration-stepper-components/vehicle-info/vehicle-info.component';
import { ResidentialInfoComponent } from './registration-stepper-components/residential-info/residential-info.component';
import { CommercialInfoComponent } from './registration-stepper-components/commercial-info/commercial-info.component';
import { SummaryComponent } from './registration-stepper-components/summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    StepItemComponent,
    StepTemplateBaseComponent,
    PersonalInfoComponent,
    EducationalInfoComponent,
    OfficialInfoComponent,
    VehicleInfoComponent,
    ResidentialInfoComponent,
    CommercialInfoComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    PersonalInfoComponent, EducationalInfoComponent, OfficialInfoComponent, VehicleInfoComponent, ResidentialInfoComponent,
    CommercialInfoComponent, SummaryComponent
  ]
})
export class AppModule { }
