import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoComponent} from "./todo/todo.component";
import {EditTodoComponent} from "./edit-todo/edit-todo.component";


const routes: Routes = [
  {path: 'list' ,component : TodoComponent},
  {path: 'edit/:id' ,component : EditTodoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
