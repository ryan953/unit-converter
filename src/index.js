
const cli = require('./cli');
const Converter = require('./Converter');
const log = require('./log');

function convert(amount, from, to) {
  const converter = new Converter().init(from, to);
  const converted = converter.convert(amount);
  return converted;
}

function reverse(amount, from, to) {
  const into = new Converter().init(from, to)
  const back = new Converter().init(to, from);

  const destValue = into.convert(amount);
  const backValue = back.convert(destValue);

  return amount == backValue;
}

module.exports = {
  start(...args) {
    try {
      const action = this.getAction(args);
      console.log(action());
    } catch (e) {
      console.log(e);
    }
  },

  getAction(args) {
    switch (args[0]) {
      case 'help':
        return cli.printHelp;
      case 'reverse':
        return () => reverse(args[1], args[2], args[3]);
      default:
        if (args.length == 3) {
          return () => new Converter().init(args[1], args[2]).explain(args[0]);
        }
    }

    return () => [
      `Unknown args: ${args}`,
      "",
      cli.printHelp(),
    ].join("\n");
  },

  doAction(action) {
    return action();
  }
};
