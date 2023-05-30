const { nanoid } = require('nanoid');
const Work = require('./Work');

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
    return this.#add(new Work(nanoid(), record));
  }

  delete(id) {
    const index = this.#list.findIndex(item => item.id === id);
    if (index > 0) this.#list.splice(index, 1);
  }

  put(record) {
    this.delete(record.id);
    return this.#add(new Work(record.id, record));
  }

  #add(work) {
    return this.#list[this.#list.push(work) - 1];
  }
}