class HashMap {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    // improved slightly due to restricting the loop size
    // and use of prime numbers
    // also - the array length should be prime to reduce collisions
    let total = 0;
    const prime = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      total = total * prime + key.charCodeAt(i) - 96;
    }
    return Math.abs(total % this.keyMap.length);
  }

  get(key) {
    const index = this._hash(key);
    if (!this.keyMap[index]) return;
    for (let i = 0; i < this.keyMap[index].length; i++) {
      if (this.keyMap[index][i][0] === key) {
        return this.keyMap[index][i][1];
      }
    }
    return;
  }

  set(key, value) {
    const index = this._hash(key);

    if (this.keyMap[index] === undefined) {
      this.keyMap[index] = [];
    }
    let foundMatch = false;
    for (let i = 0; i < this.keyMap[index].length; i++) {
      if (this.keyMap[index][i][0] === key) {
        this.keyMap[index][i][1] = value;
        foundMatch = true;
        break;
      }
    }
    if (!foundMatch) {
      this.keyMap[index].push([key, value]);
    }
  }

  keys() {
    let results = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          results.push(this.keyMap[i][j][0]);
        }
      }
    }
    return results;
  }

  values() {
    let results = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          results.push(this.keyMap[i][j][1]);
        }
      }
    }
    return results;
  }

  valuesUnique() {
    let results = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!results.includes(this.keyMap[i][j][1])) {
            results.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return results;
  }
}

/*
Insertion, Deletion, Access: O(1)
*/

function exampleBasicHash(key, arrayLen) {
  // basic hash function
  // only woks on strings
  // isn't very evenly distributed
  // not fast enough -  not constant time
  let total = 0;
  for (let i = 0; i < key.length; i++) {
    total += key.charCodeAt(i) - 96;
  }
  return total % arrayLen;
}
