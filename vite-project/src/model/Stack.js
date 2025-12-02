
class Stack {
  constructor() {
    this._ = [];
  }

  push(x) {
    this._.push(x);
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this._.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this._[this._.length - 1];
  }

  isEmpty() {
    return this._.length === 0;
  }

  size() {
    return this._.length;
  }
}