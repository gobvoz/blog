const fs = require('fs/promises');

const resolveRoot = require('../utils/resolve-root');

const createModel = require('./create-model');
const createUI = require('./create-ui');
const createPublicApi = require('./create-public-api');

module.exports = async (layer, sliceName) => {
  try {
    await fs.mkdir(resolveRoot('src', layer, sliceName.kebabCase));
  } catch (error) {
    console.log(`Slice ${sliceName.kebabCase} already exists`);
  }

  await createModel(layer, sliceName);
  await createUI(layer, sliceName);
  await createPublicApi(layer, sliceName);
}