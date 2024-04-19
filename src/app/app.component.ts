import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  lastTodoItemThatWasAdded: string;
  mySuperAwesomeTitle = 'This is a todo list app!!!';
  num: number = 1.2344;

  myFunction(todoItem: string) {
    this.lastTodoItemThatWasAdded = todoItem;
  }

  stringIsNotKristofer(node: any) {
    console.log(node);
    if (node === 'kristofer') {
      return false;
    }
    return true;
  }
}
