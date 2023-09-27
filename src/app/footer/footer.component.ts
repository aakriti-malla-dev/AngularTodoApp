import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  @Input() allItems: any;
  @Input() remaining: any;
  @Input() filter: any;
  @Input() completed: any;

  @Output() changeFilterEvent = new EventEmitter();
  @Output() removeCompletedEvent = new EventEmitter();

  changeFilter(value){
    this.changeFilterEvent.emit(value);
  }

  removeCompleted() {
    this.removeCompletedEvent.emit();
  }
}
