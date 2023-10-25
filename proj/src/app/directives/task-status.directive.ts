import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appTaskStatus]'
})
export class TaskStatusDirective {
  @Input() date!: Date;

  constructor(private el: ElementRef) {

  }

  ngOnInit() {
    const dateNow = new Date().toISOString().split('T')[0];
    const taskDate = this.date.toString();

    if (taskDate >= dateNow)
      this.el.nativeElement.style.color = 'green';
    else
      this.el.nativeElement.style.color = 'red';
  }
}
