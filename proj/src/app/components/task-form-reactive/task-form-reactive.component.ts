import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-form-reactive',
  templateUrl: './task-form-reactive.component.html',
  styleUrls: ['./task-form-reactive.component.scss']
})
export class TaskFormReactiveComponent {
  constructor(private formBuilder: FormBuilder) {}

  @Input() editTask: Task | null = null;
  @Output() addTask = new EventEmitter();

  public taskForm: FormGroup = this.formBuilder.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    date: ['', [Validators.required]],
    status: ['', Validators.required],
    cost: [0],
    tags: this.formBuilder.array([]),
  })

  get tags() {
    return this.taskForm.get('tags') as FormArray;
  }

  submitTask() {
    console.log('tags: ', this.taskForm.get('tags'));
    if(this.taskForm.invalid) return;
    this.addTask.emit(this.taskForm.value);
    console.log('task: ', this.taskForm.value);
    console.log('form valid: ', this.taskForm.valid);

    // this.taskForm.reset();
  }
  
  addTag(value = '') {
    this.tags.push(this.formBuilder.control(value, Validators.required));
  }
}
