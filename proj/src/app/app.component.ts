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
  listTask: Task[] = [
    {
      title: 'tarefa a fazer',
      description: 'desc a fazer',
      cost: 10,
      date: new Date(),
      status: 'A Fazer',
      tags: ['Angular', 'Angular2']
    },
    {
      title: 'tarefa a fazer',
      description: 'desc a fazer',
      cost: 10,
      date: new Date('12/25/2020'),
      status: 'A Fazer',
      tags: []
    },
    {
      title: 'tarefa a fazer',
      description: 'desc a fazer',
      cost: 10,
      date: new Date('02/06/1991'),
      status: 'A Fazer',
      tags: []
    },
    {
      title: 'tarefa em andamento',
      description: 'desc em andamento',
      cost: 10,
      date: new Date(),
      status: 'Em Desenvolvimento',
      tags: []
    },
    {
      title: 'tarefa em andamento',
      description: 'desc em andamento',
      cost: 10,
      date: new Date('01/01/2018'),
      status: 'Em Desenvolvimento',
      tags: []
    },
    {
      title: 'tarefa finalizada',
      description: 'desc finalizada',
      cost: 10,
      date: new Date(),
      status: 'Finalizada',
      tags: []
    },
    {
      title: 'tarefa finalizada',
      description: 'desc finalizada',
      cost: 10,
      date: new Date('10/10/1900'),
      status: 'Finalizada',
      tags: []
    }
  ];
  selectedTask: Task | null = null;
  tableListTask: Task[] = [];
  showForm = false;
  showKanban = false;
  showLog = false;

  setShowForm(showForm: boolean) {
    this.showForm = showForm;
  }
  setShowKanban(showKanban: boolean) {
    this.showKanban = showKanban;
  }
  setShowLog(showLog: boolean) {
    this.showLog = showLog;
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
