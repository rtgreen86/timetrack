const { nanoid } = require('nanoid');

module.exports = class WorkLog {
  #list;

  constructor() {
    this.#list = [];
  }

  getAll() {
    return this.#list;
  }

  getById(id) {
    return this.#list.find(item => item.id === id);
  }

  post(record) {
    return this.#add({
      id: nanoid(),
      title: record.title,
      hours: record.hours,
      archived: record.archived || false
    });
  }

  delete(id) {
    const index = this.#list.findIndex(item => item.id === id);
    if (index > 0) this.#list.splice(index, 1);
  }

  put(record) {
    this.delete(record.id);
    return this.#add({
      id: record.id,
      title: record.title,
      hours: record.hours,
      archived: record.archived || false
    });
  }

  #add(work) {
    return this.#list[this.#list.push(work) - 1];
  }
}