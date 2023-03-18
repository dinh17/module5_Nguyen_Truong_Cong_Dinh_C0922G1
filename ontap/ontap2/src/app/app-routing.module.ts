import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BodyComponent} from "./home/body/body.component";
import {CustomerListComponent} from "./customer/customer-list/customer-list.component";
import {CustomerEditComponent} from "./customer/customer-edit/customer-edit.component";
import {CustomerCreateComponent} from "./customer/customer-create/customer-create.component";


const routes: Routes = [
  {path: '', component: BodyComponent},
  {path: 'customer-list', component: CustomerListComponent},
  {path: 'customer-edit/:id', component: CustomerEditComponent},
  {path: 'customer-create', component: CustomerCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
