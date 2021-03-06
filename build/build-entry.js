const fs = require('fs-extra');
const path = require('path');
const uppercamelize = require('uppercamelcase');
const Components = require('./get-components')();
const packageJson = require('../package.json');
const version = packageJson.version;

(function buildPackagesEntry() {
  const tips = `/* Automatically generated by './build/build-entry.js' */`;
  const uninstallComponents = [];
  const importList = Components.map(
    name => `import M${uppercamelize(name)} from './${name}';`
  );
  const exportList = Components.map(name => `M${uppercamelize(name)}`);
  const installList = exportList.filter(
    name => !~uninstallComponents.indexOf(uppercamelize(name))
  );
  const content = `${tips}
    ${importList.join('\n')}
    const version = '${version}';
    const components = [ 
      ${installList.join(',\n  ')} 
    ];
    const install = function (Vue) {
      if (!Vue && install.installed) { return; };
      components.map(component => Vue.component(component.name, component));
    };
    if (typeof window !== "undefined" && window.Vue) {
      install(window.Vue);
    }
    export {
      install,
      version,
      ${exportList.join(',\n  ')}
    };
    export default {
      install,
      version
    };
  `;
  fs.writeFileSync(path.join(__dirname, '../packages/index.js'), content);
})();