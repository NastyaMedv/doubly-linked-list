const Node = require('./node');

class LinkedList {

    constructor() {
      this._head =  null;
      this._tail = null;
      this.length = 0;
    }

    append(data) {
      let node = new Node(data);

      if (this._head == null) {
        this._head = node;
        this._tail = node;
        } else {
          node.prev = this._tail;
          this._tail.next = node;
          this._tail = node;
          }
      this.length++;
    }

    head() {
      return (this._head) ? this._head.data : null;
    }

    tail() {
      return (this._tail) ? this._tail.data : null;
    }

    at(index) {}

    insertAt(index, data) {}

    isEmpty() {
      return (this.length == 0) ? true : false;
    }

    clear() {
      this._head =  null;
      this._tail = null;
      this.length = 0;
    }

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
