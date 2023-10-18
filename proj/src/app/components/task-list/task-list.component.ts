import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  filtro = '';
  isVisible = true;

  @Output() showTask = new EventEmitter();
  @Input() tasks: Task[] = []

  mostrarLista() {
   this.isVisible = !this.isVisible;
  }

  isTaskDelayed(date: Date): boolean {
    const dateNow = new Date().toISOString().split('T')[0];
    return dateNow > date.toString();
  }

  setShowTask(task: Task) {
    this.showTask.emit(task);
  }
}