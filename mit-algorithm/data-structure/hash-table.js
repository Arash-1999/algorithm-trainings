class Set {
  constructor(n) {
    this.table = Array.from({ length: n }, () => []);
    this.size = n;
    this.len = 0;
  }

  //
  hash(key) {
    let result = 0;

    switch (typeof key) {
      case "number":
        result = key % this.size;
        break;

      case "string":
        for (let char in key) {
          result += char.charCodeAt(0);
        }
        result = result % this.size;
        break;

      default:
        result = this.size - 1;
        break;
    }

    return result;
  }

  //
  insert(key) {
    let index = this.hash(key);

    if (this.table[index].indexOf(key) === -1) this.table[index].push(key);
  }

  //
  delete(key) {
    let [tIndex, index] = this.getIndex(key);

    if (index !== -1) this.table[tIndex].splice(index, 1);
  }

  //
  search(key) {
    let index = this.hash(key);

    return this.table[index].indexOf(key) !== -1;
  }

  //
  getIndex(key) {
    let index = this.hash(key);

    return [index, this.table[index].indexOf(key)];
  }
}

module.exports = { Set };
