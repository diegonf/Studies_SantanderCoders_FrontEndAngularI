/* 
  Lifecycle - Componentes
    NgOnInit: executa antes do componente renderizar
      Muito utilizado para chamadas http
    NgOnViewInit: executa após o componente renderizar
    NgOnDestroy: executa quando o componente é desmontado
    Constructor: executa antes do init, e pode dar problemas em chamadas http
  pipe
    é uma definição de formatação de dados
    pipes default
      - date: -> é possivel formatar data
        ex: task.date | date: 'dd/MM/yyyy' -> isso transforma a data para 20/01/2023, por exemplo
      - uppercase - pipe que deixa tudo maiusculo
      - slice:0:5 - pipe que vai configurar para mostrar só os 5 primeiros caracteres
      ex:
        {{ task.title | uppercase}} - {{ task.date | date: 'dd/MM/yyyy' }} - {{ task.description | slice:0:5 }} - {{ task.category }}
    criar pipes
      ng g pipe (ou p) pipes/meu-pipe
      depois abrir o arquivo meu-papi.ts e fazer a entrutura similar a do arquivo currency.pipe.ts nessa pasta
*/