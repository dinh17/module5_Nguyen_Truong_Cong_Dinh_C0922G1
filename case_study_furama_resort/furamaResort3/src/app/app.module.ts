import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';

import { CustomerCreateComponent } from './customer/customer-create/customer-create.component';
import { FacilityListComponent } from './facility/facility-list/facility-list.component';
import { FacilityEditComponent } from './facility/facility-edit/facility-edit.component';
import { FacilityCreateComponent } from './facility/facility-create/facility-create.component';
import { ContractListComponent } from './contract/contract-list/contract-list.component';
import { ContractCreateComponent } from './contract/contract-create/contract-create.component';
import { FooterComponent } from './home/footer/footer.component';
import { HeaderComponent } from './home/header/header.component';
import { BodyComponent } from './home/body/body.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CustomerEditComponent,

    CustomerCreateComponent,
    FacilityListComponent,
    FacilityEditComponent,
    FacilityCreateComponent,
    ContractListComponent,
    ContractCreateComponent,
    FooterComponent,
    HeaderComponent,
    BodyComponent,
    CustomerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
