import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  @Output() showTask = new EventEmitter();
  @Input() tasks: Task[] = []

  kanbanCards = [
    {
      title: 'A Fazer',
      status: 'A Fazer',
      class: 'bg-blue-200 border-blue-500',
    },
    {
      title: 'Em Desenvolvimento',
      status: 'Em Desenvolvimento',
      class: 'bg-orange-200 border-orange-500',
    },
    {
      title: 'Finalizadas',
      status: 'Finalizada',
      class: 'bg-green-200 border-green-500',
    }
  ]

  setShowTask(task: Task) {
    this.showTask.emit(task);
  }
}