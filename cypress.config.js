const { defineConfig } = require('cypress');

var data = new Date();

module.exports = defineConfig({
  projectId: 'aspi6i',
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
  
    overwrite : false,
    json : false,
    html : true,
    timestamp: 'dd-mm-yyyy',   
    reportFilename: '[name]_data_do__teste_[datetime]'+ '_' + data.getHours() + 'h'+ 
    data.getMinutes() + 'm' + '_Status_[status]',
    
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});