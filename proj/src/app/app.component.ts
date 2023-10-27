import { Component } from '@angular/core';
import { Task } from './models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  listTask: Task[] = [
    {
      id: 0,
      title: 't00',
      description: 'd0',
      cost: 0,
      date: new Date(),
      status: 'A Fazer',
      tags: ['Angular', 'Angular2']
    },
    {
      id: 1,
      title: 't11',
      description: 'd1',
      cost: 1,
      date: new Date('12/25/2020'),
      status: 'A Fazer',
      tags: ['tarefa1', 'sei la']
    },
    {
      id: 2,
      title: 't22',
      description: 'd2',
      cost: 2,
      date: new Date('01/01/2018'),
      status: 'Em Desenvolvimento',
      tags: ['2']
    },
    {
      id: 3,
      title: 't33',
      description: 'd3',
      cost: 3,
      date: new Date('10/10/1900'),
      status: 'Finalizada',
      tags: ['finalizada a mto tempo', 'nois']
    },
  ];
  taskToBeEditted: Task | null = null;
  selectedTask: Task | null = null;
  log: Task[] = [];
  showForm = true;
  showKanban = true;
  showLog = true;
  id = 10;

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
    this.log.push(task);
  }

  setHideTask() {
    this.selectedTask = null;
  }

  addNewTask(task: Task) {
    this.listTask.push({...task, id: ++this.id});
    alert('Tarefa cadastrada com sucesso!');
  }

  deleteTask(task: Task) {
    const taskIndex = this.listTask.findIndex(item => item.id === task.id);
    if(taskIndex === -1) {
      alert(`ID ${task.id} não encontrado!`);
      return;
    }
    
    this.listTask.splice(taskIndex, 1);
    this.taskToBeEditted = null;
    alert(`Task #${task.id} deletada com sucesso!`);
  }

  setEditTask(task: Task | null){
    this.taskToBeEditted = task;
    if(task) this.showForm = true;
  }

  editTask(task: Task) {
    const taskIndex = this.listTask.findIndex(item => item.id === task.id);
    if(taskIndex === -1) {
      alert(`ID ${task.id} não encontrado!`);
      return;
    }
    this.listTask.splice(taskIndex, 1, task);
    this.taskToBeEditted = null;
    alert(`Task #${task.id} alterada com sucesso!`);
  }
}
