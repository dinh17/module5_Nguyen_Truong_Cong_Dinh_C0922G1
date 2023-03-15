import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CustomerListComponent} from './customer/customer-list/customer-list.component';
import {FacilityListComponent} from './facility/facility-list/facility-list.component';
import {ContractListComponent} from './contract/contract-list/contract-list.component';
import {ContractCreateComponent} from './contract/contract-create/contract-create.component';
import {FacilityCreateComponent} from './facility/facility-create/facility-create.component';
import {BodyComponent} from './home/body/body.component';
import {CustomerEditComponent} from './customer/customer-edit/customer-edit.component';
import {CustomerCreateComponent} from './customer/customer-create/customer-create.component';


const routes: Routes = [
  {
    path: '',
    component: BodyComponent
  },
  {
    path: 'customer-list',
    component: CustomerListComponent
  },
  {
    path: 'customer-edit/:id',
    component: CustomerEditComponent
  },
  {
    path: 'customer-create',
    component: CustomerCreateComponent
  },
  {
    path: 'facility',
    component: FacilityListComponent
  },
  {
    path: 'contract',
    component: ContractListComponent
  },
  {
    path: 'contract/create',
    component: ContractCreateComponent
  },
  {
    path: 'facility/create',
    component: FacilityCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
