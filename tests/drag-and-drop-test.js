'use strict';
const support = require('../support');
const params = browser.params;

describe('Confirm ability to perform drag and drop action in firefox', () => {
    it('Should perform drag and drop action', () => {
        const selector = '.btn.btn-primary';
        const div = $('.btn.btn-primary');
        const successDiv = $('.btn.btn-success');
        return browser.get(params.dndTemplateUrl)
          .then(() => {
              return browser.wait(protractor.ExpectedConditions.visibilityOf(div), 5000);
          })
          .then(() => {
              return browser.executeScript(support.dragAndDrop, selector, null, {dropLocation: {x: 100, y: 150}});
          })
          .then(() => {
              return browser.sleep(2000);
          })
          .then(() => {
              expect(successDiv.isDisplayed()).toBe(true);
          });
    });
});
