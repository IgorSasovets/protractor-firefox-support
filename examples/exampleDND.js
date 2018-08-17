'use strict';
const support = require('protractor-firefox-support');
const params = browser.params;

describe('Custom DnD function tests', () => {
  const div = $('.btn.btn-primary');
  beforeEach(() => {
      return browser.get(params.dndPageUrl);
  });
  describe('Confirm ability to perform drag and drop action in firefox', () => {
    it('Should perform drag and drop action', function() {
      const selector = '.btn.btn-primary';
      const successDiv = $('.btn.btn-success');
      return browser.wait(protractor.ExpectedConditions.visibilityOf(div), 5000)
        .then(() => {
          return browser.executeScript(support.dragAndDrop, selector, null,
            {dropLocation: {x: 100, y: 150}});
        })
        .then(() => {
            expect(successDiv.isDisplayed()).toBe(true);
        });
    });
  });
});
