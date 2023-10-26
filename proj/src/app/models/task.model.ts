export class Task {
  title: string;
  description: string;
  date: Date;
  status: string;
  cost: string;
  tags: string[];

  constructor(title = '', description: string, date = new Date(), cost: string, status: string, tags: string[] = []) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.cost = cost;
    this.status = status;
    this.tags = tags;
  }
}