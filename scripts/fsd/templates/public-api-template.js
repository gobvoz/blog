module.exports = (sliceName) => {
  return `export { ${sliceName.pascalCase}Schema } from './model/types/${sliceName.kebabCase}.schema';
export { ${sliceName.pascalCase} } from './ui/${sliceName.kebabCase}';
`
}