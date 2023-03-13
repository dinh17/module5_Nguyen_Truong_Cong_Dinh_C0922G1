import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ListFacilityComponent} from './list-facility/list-facility.component';
import {ListCustomerComponent} from './list-customer/list-customer.component';
import {ListContractComponent} from './list-contract/list-contract.component';


const routes: Routes = [{path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'list-facility', component: ListFacilityComponent},
  {path: 'list-customer', component: ListCustomerComponent},
  {path: 'list-contract', component: ListContractComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
