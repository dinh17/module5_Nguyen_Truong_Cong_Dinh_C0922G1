import {Component, OnInit} from '@angular/core';
import {Todo} from "../todo";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TodoService} from "../service/todo.service";



@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})


export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  content = new FormControl();
  todo: Todo;

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.todoService.getAll().subscribe(todo => {
      this.todos = todo;
    })
  }

  toggleTodo(id:number) {
    debugger
    this.todoService.delete(id).subscribe(() => {
        alert('thành công')
        this.todoService.getAll().subscribe(todo => {
          this.todos = todo;
        })
      },
      e => {
        console.log(e);
      });
  }

  findById(id:number) {
    return this.todoService.findById(id).subscribe(todo => {
      this.todo = todo;
      console.log(this.todo)
    })
  }

  change() {
    const value = this.content.value;
    if (value) {
      const todo: Todo = {
        content: value,
        complete: false
      };
      this.todoService.save(todo).subscribe(() => {
        alert('thành công')
      })
      this.todos.push(todo);
      this.content.reset();
    }
  }
}
