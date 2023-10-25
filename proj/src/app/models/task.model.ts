export class Task {
  title: string;
  date: Date;
  description: string;
  status: string;
  cost: string;

  constructor(title = '', description: string, date = new Date(), cost: string, status: string) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.cost = cost;
    this.status = status;
  }
}