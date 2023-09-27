import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
})
export class ItemComponent {
    @Input() item: any;
    @Input() editingTodoTitle: any;

    @Output() toggleCompletionEvent = new EventEmitter();
    @Output() editTodoEvent = new EventEmitter();
    @Output() removeTodoEvent = new EventEmitter();
    @Output() updateEditingTodoEvent = new EventEmitter();
    @Output() stopEditingEvent = new EventEmitter();
    @Output() editingTodoTitleChangeEvent = new EventEmitter();

    toggleCompletion(item) {
        this.toggleCompletionEvent.emit(item);
    }
    editTodo(item) {
        this.editTodoEvent.emit(item);
    }
    removeTodo(item) {
        this.removeTodoEvent.emit(item);
    }
    updateEditingTodo(item) {
        this.updateEditingTodoEvent.emit(item);
    }
    stopEditing(item) {
        this.stopEditingEvent.emit(item);
    }
    editingTodoTitleChange() {
      this.editingTodoTitleChangeEvent.emit(this.editingTodoTitle);
    }
}