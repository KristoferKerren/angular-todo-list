import { Component } from "@angular/core";


@Component({
    selector: 'app-todo-items',
    templateUrl: './todo-items.component.html'
})
export class TodoItemsComponent {
    showTodoItems: boolean = false;
    todoItems: string[] = [
        "Groceries", "Work", "Relax"
    ]

    toggleShowTodoItems() {
        console.log(`showTodoItems is right now ${this.showTodoItems}`);
        this.showTodoItems = !this.showTodoItems;
    }
}