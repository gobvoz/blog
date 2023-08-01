const fs = require('fs/promises');

const resolveRoot = require('../utils/resolve-root');

const reduxSliceTemplate = require('../templates/redux-slice-template');
const schemaTypeTemplate = require('../templates/schema-type-template');

module.exports = async (layer, sliceName) => {
  const resolveModelPath = (...segments) => resolveRoot('src', layer, sliceName.kebabCase, 'model', ...segments);

  const createModelStructure = async () => {
    try {
      await fs.mkdir(resolveModelPath());
      await fs.mkdir(resolveModelPath('types'));
      await fs.mkdir(resolveModelPath('slice'));
      await fs.mkdir(resolveModelPath('selectors'));
      await fs.mkdir(resolveModelPath('services'));
    } catch (error) {
      console.log(`Slice ${sliceName.kebabCase} already exists`);
    }
  }

  const createReduxSlice = async () => {
    try {
      await fs.writeFile(
        resolveModelPath('slice', `${(sliceName.kebabCase)}.slice.ts`),
        reduxSliceTemplate(sliceName)
      );
    } catch (error) {
      console.log(`Slice ${sliceName.kebabCase} already exists`);
    }
  };

  const createSchemaType = async () => {
    try {
      await fs.writeFile(
        resolveModelPath('types', `${(sliceName.kebabCase)}.schema.ts`),
        schemaTypeTemplate(sliceName)
      );
    } catch (error) {
      console.log(`Slice ${sliceName.kebabCase} type already exists`);
    } 
  };

  await createModelStructure();
  await createReduxSlice();
  await createSchemaType();
}
