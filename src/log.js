
function log(func, ...args) {
  console.log('executing', args, func);
  const result = func(...args);
  console.log('result', result);
  return result;
}

module.exports = log;
