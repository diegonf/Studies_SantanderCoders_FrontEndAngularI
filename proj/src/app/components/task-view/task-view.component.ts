import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/models/task.model';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent {
  @Input() selectedTask: Task | null = null;
  @Output() hideTask = new EventEmitter();

  setHideTask() {
    this.hideTask.emit();
  }
}
