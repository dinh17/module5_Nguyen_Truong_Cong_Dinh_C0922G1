import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacilitiComponent } from './faciliti/faciliti.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ListFacilityComponent } from './list-facility/list-facility.component';
import { EditFacilityComponent } from './edit-facility/edit-facility.component';
import { AddFacilityComponent } from './add-facility/add-facility.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AddContractComponent } from './add-contract/add-contract.component';
import { ListContractComponent } from './list-contract/list-contract.component';

@NgModule({
  declarations: [
    AppComponent,
    FacilitiComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ListFacilityComponent,
    EditFacilityComponent,
    AddFacilityComponent,
    ListCustomerComponent,
    EditCustomerComponent,
    AddCustomerComponent,
    AddContractComponent,
    ListContractComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
