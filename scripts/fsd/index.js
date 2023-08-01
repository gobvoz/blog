const { camelCase, pascalCase, kebabCase, snakeCase } = require('./utils/case-helper');
const createTemplate = require('./creators/create-template');

const layer = process.argv[2];
const sliceName = process.argv[3];

const layerList = ['features', 'entities', 'pages'];

if (!layerList.includes(layer)) {
  throw new Error(`Invalid layer: ${layer}`);
}

if (!sliceName) {
  throw new Error(`Missing slice name`);
}

createTemplate(layer, {
  camelCase: camelCase(sliceName),
  pascalCase: pascalCase(sliceName),
  kebabCase: kebabCase(sliceName),
  snakeCase: snakeCase(sliceName),
});
