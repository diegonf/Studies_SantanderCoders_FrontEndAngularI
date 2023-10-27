export class Task {
  title: string;
  description: string;
  date: Date;
  status: Status;
  cost: number;
  tags: string[];

  constructor(title = '', description: string, date = new Date(), cost: number, status: Status, tags: string[] = []) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.cost = cost;
    this.status = status;
    this.tags = tags;
  }
}

export type Status = 'A Fazer' | 'Em Desenvolvimento' | 'Finalizada' | '';