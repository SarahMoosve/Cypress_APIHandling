   const cypress = require("cypress");
const { defineConfig } = require("cypress");

//const sqlServer = require('cypress-sql-server');


async function setupNodeEvents(on, config) {

  config.db = {
    userName: "azure_username",
    password: "azure_password",
    server: "azure_servername",
    options: {
        database: "testdb",
        encrypt: true,
        rowCollectionOnRequestCompletion : true
    }
}
  
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  

  //tasks = sqlServer.loadDBPlugin(config.db)
  //on('task', tasks)

  /*on('task', {
    excelToJsonConverter(filePath)
    {
      const result = excelToJson ({
      source: fstat.readFileSync(filePath)
    })
    return result
  }
  })*/

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  projectId: "xjao74",
  defaultCommandTimeout: 20000,

  env: {
    url: "https://rahulshettyacademy.com",
   // userId: "sarah",
   // password: "123456"
  },
  retries: {
    runMode: 1,
  },

  e2e: {
    setupNodeEvents,
    specPattern: 'cypress/integration/UI/**/*.js'
  },
  
});
