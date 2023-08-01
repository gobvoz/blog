const fs = require('fs/promises');

const resolveRoot = require('../utils/resolve-root');

const publicApiTemplate = require('../templates/public-api-template');

module.exports = async (layer, sliceName) => {
  try {
    await fs.writeFile(
      resolveRoot('src', layer, sliceName.kebabCase, 'index.ts'),
      publicApiTemplate(sliceName)
    )
  } catch (error) {
    console.log(`Slice ${sliceName.kebabCase} 'index.ts' already exists`);
  }
}