export class Task {
  title: string;
  description: string;
  date: Date;
  status: Status;
  cost: number;
  tags: string[];
  id: number;  

  constructor(title = '', description: string, date: Date, cost: number, status: Status, tags: string[], id = 0) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.cost = cost;
    this.status = status;
    this.tags = tags;
    this.id = id;
  }
}

export type Status = 'A Fazer' | 'Em Desenvolvimento' | 'Finalizada' | '';