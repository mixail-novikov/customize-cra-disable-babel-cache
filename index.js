const { getBabelLoader } = require("customize-cra");

const disableBabelCache = () => (config) => {
  getBabelLoader(config).options.cacheDirectory = false;

  return config;
};

module.exports = { disableBabelCache };
