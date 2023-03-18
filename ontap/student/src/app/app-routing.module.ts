import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from "./student/list/list.component";
import {EditComponent} from "./student/edit/edit.component";



const routes: Routes = [
  {path:'student/list',component: ListComponent},
  {path:'edit/:id',component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
