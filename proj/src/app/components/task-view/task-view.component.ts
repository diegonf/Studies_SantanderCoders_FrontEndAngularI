import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent {
  @Input() selectedTask: Task | null = null;
  @Output() hideTask = new EventEmitter();
  @Output() editTask = new EventEmitter();
  @Output() deleteTask = new EventEmitter();

  setHideTask() {
    this.hideTask.emit();
  }

  handleEditTask(task: Task) {
    this.editTask.emit(task);
    this.setHideTask();
  }
  
  handleDeleteTask(task: Task) {
    this.deleteTask.emit(task);
    this.setHideTask();
  }
}
