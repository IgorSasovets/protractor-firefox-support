'use strict';
const support = require('protractor-firefox-support');
const params = browser.params;

describe('Mouse events functions tests', () => {
  describe('Positive', () => {
    const div = $('.btn.btn-primary');
    describe('Confirm ability to perform DnD action using mouse events in firefox', () => {
      beforeAll(() => {
        return browser.get(params.dndTemplateUrl);
      });
      it('Should perform DnD using mouse actions', function() {
        const selector = '.btn.btn-primary';
        const successDiv = $('.btn.btn-success');
        return browser.wait(protractor.ExpectedConditions.visibilityOf(div), 5000)
          .then(() => browser.executeScript(support.mouseDown, {elementSelector: selector}))
          .then(() => browser.executeScript(support.mouseMove, {x: 50, y: 120}))
          .then(() => browser.executeScript(support.mouseUp, {x: 50, y: 120}))
          .then(() => browser.sleep(500))
          .then(() => {
            expect(successDiv.isDisplayed()).toBe(true);
          });
      });
    });
  });
});
