import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent {
  @Input() tasks: Task[] = [];

  title = '';

  getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); 
    const day = today.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  submitTask(form: NgForm) {
    if (form.invalid) return;

    const t: Task = form.value;
    const newTask = new Task(this.title, t.description, t.date, t.cost, t.status, []);
    this.tasks.push(newTask);
  }
}
