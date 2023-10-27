import { Directive, ElementRef, Input } from '@angular/core';
import { Status } from '../models/task.model';

@Directive({
  selector: '[appTaskStatus]'
})
export class TaskStatusDirective {
  @Input() date!: Date;
  @Input() status!: Status;

  constructor(private el: ElementRef) {

  }

  ngOnInit() {
    const dateNow = new Date().toISOString().split('T')[0];
    const taskDate = new Date(this.date).toISOString().split('T')[0];

    if (taskDate >= dateNow || this.status === 'Finalizada') return;

    this.el.nativeElement.style.color = 'red';
  }
}
