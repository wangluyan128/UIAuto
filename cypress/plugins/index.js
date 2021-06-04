/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
}

//分组插件
/*const selectTestsWithGrep = require('cypress-select-tests/grep')
module.exports = (on, config) => {
    on('file:preprocessor', selectTestsWithGrep(config))
}*/


const  fs = require('fs-extra')
const  path = require('path')
//执行环境配置文件
function getConfigurationByFile(file) {
    const pathToConfigFile = path.resolve('..','cypress/config','cypress.'+file+'.json')
    console.log(pathToConfigFile)
    return fs.readJson(pathToConfigFile)
}
module.exports = (on,config)=>{
    //指定一个环境变量，若没有指定，则使用cypress.test.json
    const  file = config.env.configFile||"test"

    return getConfigurationByFile(file)
}

