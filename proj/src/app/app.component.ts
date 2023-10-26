import { Component } from '@angular/core';
import { Task } from './models/task.model';

// export interface IListTask {
//   title: string;
//   description: string;
//   date: Date;
//   category: string;
//   status: string;
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  listTask: Task[] = [];
  selectedTask: Task | null = null;
  tableListTask: Task[] = [];
  showForm = true;

  setShowForm(showForm: boolean){
    this.showForm = showForm;
  }

  setSelectedTask(task: Task) {
    this.selectedTask = task;
    this.tableListTask.push(task);
  }

  setHideTask() {
    this.selectedTask = null;
  }

  addNewTask(task: Task) {
    this.listTask.push(task);
    alert('Tarefa cadastrada com sucesso!');
  }
}
