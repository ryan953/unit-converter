
const mapping = {
  m: {
    km: (d) => d / 1000,
    mi: (d) => (d * 1 / 1.609344 / 1000).toFixed(2), // 2 decimals is really enough
  },
  km: {
    m: (d) => d * 1000,
    mi: (d) => (d * 1 / 1.609344).toFixed(2), // 2 decimals is really enough
  },
};

module.exports = mapping;
