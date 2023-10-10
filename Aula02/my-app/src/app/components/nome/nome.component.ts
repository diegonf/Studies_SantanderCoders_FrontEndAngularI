import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nome',
  templateUrl: './nome.component.html',
  styleUrls: ['./nome.component.scss']
})
export class NomeComponent {

  @Input() inputFromParent: string = "";
}
