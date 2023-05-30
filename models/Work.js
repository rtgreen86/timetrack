module.exports = class Task {
  constructor(id, data) {
    this.id = id;
    this.title = data.title;
    this.hours = data.hours;
    this.archived = data.archived || false;
  }
}
