import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todomvc';

  allItems: any[] = [];

  @Input()
  newTodoText = '';

  get items() {
      if (this.filter === 'all') {
        return this.allItems;
      }

      return this.allItems.filter((item) => this.filter === 'completed' ? item.completed : !item.completed);
  }

  get remaining() {
    return this.allItems.filter(todo => !todo.completed).length;
  }

  filter: 'all' | 'active' | 'completed' = 'all';

  toggleCompletion(todo) {
    todo.completed = !todo.completed;
  }

  toggleAll() {
    this.allItems.forEach(todo => todo.completed = !todo.completed);
  }

  get completed() {
    return this.allItems.filter(todo => todo.completed);
  }

  removeCompleted() {
    this.allItems = this.allItems.filter(todo => !todo.completed);
  }

  addTodo() {
    if (this.newTodoText.trim().length) {
        this.allItems.push({ id: Date.now(), title: this.newTodoText, completed: false, editing: false });
        this.newTodoText = '';
    }
  }

  removeTodo(todo){
    this.allItems.splice(this.allItems.indexOf(todo), 1);
  }
}