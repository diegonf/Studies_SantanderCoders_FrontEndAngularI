import { Component } from '@angular/core';
import { Task } from 'src/models/task.model';

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

  setSelectedTask(task: Task) {
    this.selectedTask = task;
    this.tableListTask.push(task);
  }

  setHideTask() {
    this.selectedTask = null;
  }
}
