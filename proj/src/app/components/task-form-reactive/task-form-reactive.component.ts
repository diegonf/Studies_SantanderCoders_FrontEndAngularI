import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-form-reactive',
  templateUrl: './task-form-reactive.component.html',
  styleUrls: ['./task-form-reactive.component.scss']
})
export class TaskFormReactiveComponent {
  constructor(private formBuilder: FormBuilder) { }

  @Input() taskToBeEditted: Task | null = null;
  @Output() addTask = new EventEmitter();
  @Output() editTask = new EventEmitter();
  @Output() cancelEditting = new EventEmitter();

  ngOnChanges() {
    if(this.taskToBeEditted) {
      this.taskForm.reset({
        ...this.taskToBeEditted,
        date: new Date(this.taskToBeEditted.date).toISOString().split('T')[0]
      });
      this.taskToBeEditted.tags.forEach(tag => this.addTag(tag));
    }
  }

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

  addTag(value = '') {
    this.tags.push(this.formBuilder.control(value, Validators.required));
  }

  submitTask(formDir: FormGroupDirective) {
    if (this.taskForm.invalid) return;

    if(this.taskToBeEditted) {
      this.editTask.emit({...this.taskForm.value, id: this.taskToBeEditted.id})
    } else {
      this.addTask.emit(this.taskForm.value);
    }

    formDir.resetForm(); // limpa o FormGroupDirective para limpar os estados do form (valid / invalid / submitted)
    this.clearForm();
  }

  setCancelEditting() {
    this.cancelEditting.emit();
    this.clearForm();
  }

  clearForm() {
    this.taskForm.reset(); // limpa todos os campos do formulário (exceto o tags)
    while (this.tags.controls.length !== 0) { // limpa todos os campos da lista tags
      this.tags.removeAt(0);
    }
  }
}
