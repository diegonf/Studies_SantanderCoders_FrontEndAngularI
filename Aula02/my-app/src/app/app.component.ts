import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'my-app';
  title2 = 'my-app2';

  isOpen = true;

  nome = "Diego"
  sobrenome = "Ferreira"

  /* 
    Variáveis
      public title = '';
      private title2 = '';
        no caso variavel privada só pode ser acessada dentro desse arquivo.
        Se ela é public, qualquer arquivo pode acessar ela
  */
}
