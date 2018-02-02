exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  capabilities: {
    'browserName': 'firefox'
  },

  specs: [
    'drag-and-drop-test.js'
    ],

  params: {
    dndTemplateUrl: 'http://codef0rmer.github.io/angular-dragdrop/#!/'
  },

  onPrepare: function () {
      browser.driver.manage().window().setSize(1200, 980);
  }
}
