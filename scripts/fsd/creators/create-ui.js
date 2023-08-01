const fs = require('fs/promises');

const resolveRoot = require('../utils/resolve-root');

const componentTemplate = require('../templates/component-template');
const storyTemplate = require('../templates/story-template');
const styleTemplate = require('../templates/style-template');

module.exports = async (layer, sliceName) => {
  const resolveUIPath = (...segments) => resolveRoot('src', layer, sliceName.kebabCase, 'ui', ...segments);

  const createUIDir = async () => {
    try {
      await fs.mkdir(resolveUIPath());
    } catch (error) {
      console.log('Could not create UI directory');
    }
  }

  const createComponent = async () => {
    try {
      await fs.writeFile(
        resolveUIPath(`${sliceName.kebabCase}.tsx`),
        componentTemplate(sliceName)
      );
      await fs.writeFile(
        resolveUIPath(`${sliceName.kebabCase}.stories.tsx`),
        storyTemplate(layer, sliceName)
      );
      await fs.writeFile(
        resolveUIPath(`${sliceName.kebabCase}.module.scss`),
        styleTemplate(sliceName)
      );
    } catch (error) {
      console.log('Could not create component');
    }
  }

  await createUIDir();
  await createComponent();
}