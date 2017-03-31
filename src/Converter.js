
const mapping = require('./mapping');

class Converter {
  init(from, to) {
    if (from == to) {
      return;
    }

    this.from = from;
    this.to = to;
    return this;
  }

  convert(value) {
    return mapping[this.from][this.to](value);
  }

  explain(value) {
    return `${value}${this.from} is ${this.convert(value)}${this.to}`;
  }
}

module.exports = Converter;
