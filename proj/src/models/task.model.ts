export class Task {
  title: string;
  description: string;
  date: Date;
  category: string;
  status: string;

  constructor(title = '', description = '', date = new Date(), category = '', status = '') {
    this.title = title;
    this.description = description;
    this.date = date;
    this.category = category;
    this.status = status;
  }
}