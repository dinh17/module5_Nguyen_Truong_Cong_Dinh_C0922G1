import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TodoService} from "../service/todo.service";
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Todo} from "../todo";

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {
  id: number;
todoForm: FormGroup;
todo:Todo;
  constructor(private activatedRoute: ActivatedRoute, private todoService: TodoService, private  rout:Router){

  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
    this.id = +param.get('id')
  })
    this.todoService.findById(this.id).subscribe(todo => {
      this.todo = todo;
      debugger
    this.todoForm=new FormGroup({
      content: new FormControl(this.todo.content),
    })
  })
  }


  save() {
    this.todoService.update(this.id,this.todoForm.value).subscribe(()=>{
      this.rout.navigateByUrl('/list')
    })
  }
}
