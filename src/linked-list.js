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

      return this;
    }

    head() {
      return (this._head) ? this._head.data : null;
    }

    tail() {
      return (this._tail) ? this._tail.data : null;
    }

    at(index) {
      let node = this._head, i = 0;

      for (let i=0; i<index; i++) {
        if (node.next)
          node = node.next;
          else return null
      }

      return node.data;
    }

    insertAt(index, data) {
      if (index > this.length) return null;

      let node = new Node(data);

      if (index == 0) {
        if (this._head == null) {
          this._head = node;
          this._tail = node;
          } else {
            node.next = this._head;
            this._head.prev = node;
            this._head = node;
            }

        this.length++;

        return this;
      }

      let prevNode = this._head;

      for (let i=1; i<index; i++) {
        prevNode = prevNode.next;
      }

      if (prevNode.next) {
        prevNode.next.prev = node;
        node.next = prevNode.next;
        } else {
          this._tail = node;
          }

      node.prev = prevNode;
      prevNode.next = node;

      this.length++;

      return this;
    }

    isEmpty() {
      return (this.length == 0) ? true : false;
    }

    clear() {
      this._head =  null;
      this._tail = null;
      this.length = 0;

      return this;
    }

    deleteAt(index) {
      let node = this._head;

      for (let i=0; i<index; i++) {
        if (node.next)
          node = node.next;
          else return null
      }

      if (node.prev) node.prev.next = node.next;
        else this._head = node.next;
      if (node.next) node.next.prev = node.prev;
        else this._tail = node.prev;

      this.length--;

      return this;
    }

    reverse() {
      let node = this._head;

      while (node) {
        let temp = node.next;
        node.next = node.prev;
        node.prev = temp;
        node = node.prev;
      }

      let temp = this._head;
      this._head = this._tail;
      this._tail = temp;

      return this;
    }

    indexOf(data) {
      let node = this._head, i = 0;

      while (node) {
        if (node.data == data)
          return i;
        node = node.next;
        i++;
      }

      return -1;
    }
}

module.exports = LinkedList;
