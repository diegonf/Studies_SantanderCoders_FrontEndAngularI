import { Component, Input } from '@angular/core';
import { Task } from 'src/models/task.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent {
  @Input() tasks: Task[] = [];

  title = '';
  description = '';
  date = new Date();
  category = '';
  status = '';

  submitTask() {
    if (this.title === 'teste') return;

    const newTask = new Task(this.title, this.description, this.date, this.category, this.status);
    this.tasks.push(newTask);
  }
}
