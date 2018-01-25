exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  capabilities: {
    'browserName': 'firefox'
  },

  specs: [
    'drag-and-drop-test.js'
    ],

  params: {
    dndTemplateUrl: 'https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_draggable'
  },

  onPrepare: function () {
      browser.driver.manage().window().setSize(1200, 980);
  }
}
