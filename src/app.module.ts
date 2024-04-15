import { NgModule } from "@angular/core";
import { AppComponent } from "./app/app.component";
import { BrowserModule } from "@angular/platform-browser";
import { HeaderComponent } from "./components/header.component";
import { TodoItemsComponent } from "./components/todo-items.component";

@NgModule({
    declarations: [
      AppComponent,
      HeaderComponent,
      TodoItemsComponent
    ],
    imports: [
      BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]  // Bootstrap AppComponent
  })
  export class AppModule { }