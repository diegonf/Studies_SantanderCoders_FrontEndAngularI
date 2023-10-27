import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-form-reactive',
  templateUrl: './task-form-reactive.component.html',
  styleUrls: ['./task-form-reactive.component.scss']
})
export class TaskFormReactiveComponent {
  constructor(private formBuilder: FormBuilder) { }

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

  addTag(value = '') {
    this.tags.push(this.formBuilder.control(value, Validators.required));
  }

  submitTask(formDir: FormGroupDirective) {
    if (this.taskForm.invalid) return;
    this.addTask.emit(this.taskForm.value);

    this.clearForm(formDir);
  }

  clearForm(formDir: FormGroupDirective) {
    formDir.resetForm(); // limpa o FormGroupDirective para limpar os estados do form (valid / invalid / submitted)
    this.taskForm.reset(); // limpa todos os campos do formulário (exceto o tags)

    while (this.tags.controls.length !== 0) { // limpa todos os campos da lista tags
      this.tags.removeAt(0);
    }
  }
}
