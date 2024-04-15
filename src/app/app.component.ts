import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'angular-todo-list';
  lastTodoItemThatWasAdded: string;

  myFunction(todoItem: string) {
    this.lastTodoItemThatWasAdded = todoItem;
  }
}
