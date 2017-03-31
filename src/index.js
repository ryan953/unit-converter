
const cli = require('./cli');
const Converter = require('./Converter');
const log = require('./log');

function convert(amount, from, to) {
  const converter = new Converter().init(from, to);
  const converted = converter.convert(amount);
  return converted;
}

function reverse(amount, from, to) {
  console.log(`Converting ${amount} from '${from}' into '${to}' and then back again`);

  const into = (new Converter()).init(from, to)
  const back = (new Converter()).init(to, from);

  const destValue = into.convert(amount);
  const backValue = back.convert(destValue);

  return amount == backValue;
}

module.exports = {
  start(...args) {
    try {
      const action = this.getAction(args);
      console.log('The result is: ' + action());
      console.log('');
      console.log('\033[1;32m✔\033[0m UnitConverter will now exit');
    } catch (e) {
      console.error('');
      console.error('UnitConverter caught an error:');
      console.error(e);
      console.error('');
      console.error('\033[1;31m✘\033[0m UnitConverter will now exit');
    }
    console.log('');
  },

  getAction(args) {
    switch (args[0]) {
      case 'help':
        return cli.printHelp;
      case 'reverse':
        return () => {
          return reverse(
            args[1],
            args[2],
            args[3]
          );
        };
      default:
        if (args.length == 3) {
          return () => {
            return (new Converter()).init(args[1], args[2]).explain(args[0]);
          };
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
