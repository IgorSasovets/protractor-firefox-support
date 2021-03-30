'use strict';
const { expect } = require('chai');
const support = require('protractor-firefox-support');
const params = browser.params;

describe('Custom DnD function tests', () => {
  const div = $('.btn.btn-primary');
  beforeEach(() => {
      return browser.get(params.dndPageUrl);
  });
  describe('Confirm ability to perform drag and drop action in firefox', () => {
    it('Should perform drag and drop action', async() => {
      const selector = '.btn.btn-primary';
      const successDiv = $('.btn.btn-success');
      await browser.wait(protractor.ExpectedConditions.visibilityOf(div), 5000);
      await browser.executeScript(support.dragAndDrop, selector, null,
        {dropLocation: {x: 100, y: 150}});
      await browser.sleep(2000);
      expect(await successDiv.isDisplayed()).to.be.true;
    });
  });
});
