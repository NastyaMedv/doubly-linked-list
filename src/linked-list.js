const Node = require('./node');

class LinkedList {

    constructor() {
      this.first =  null;
      this.last = null;
      this.length = 0;
    }

    newNode(data) {
      return {
        data: data
      }
    }

    append(data) {
      let node = this.newNode(data);

      if (this.first == null) {
        this.first = node;
        this.last = node;
        } else {
          node.prev = this.last;
          this.last.next = node;
          this.last = node;
          }
      this.length++;
    }

    head() {
      return (this.first) ? this.first.data : null;
    }

    tail() {
      return (this.last) ? this.last.data : null;
    }

    at(index) {}

    insertAt(index, data) {}

    isEmpty() {
      return (this.length == 0) ? true : false;
    }

    clear() {
      this.first =  null;
      this.last = null;
      this.length = 0;
    }

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
