'use strict';
const { expect } = require('chai');
const support = require('protractor-firefox-support');
const params = browser.params;

describe('Mouse events functions tests', () => {
  describe('Positive', () => {
    const div = $('.btn.btn-primary');
    describe('Confirm ability to perform DnD action using mouse events in firefox', () => {
      beforeAll(() => {
        return browser.get(params.dndTemplateUrl);
      });
      it('Should perform DnD using mouse actions', async() => {
        const selector = '.btn.btn-primary';
        const successDiv = $('.btn.btn-success');
        await browser.wait(protractor.ExpectedConditions.visibilityOf(div), 5000);
        await browser.executeScript(support.mouseDown, {elementSelector: selector});
        await browser.executeScript(support.mouseMove, {x: 50, y: 120});
        await browser.executeScript(support.mouseUp, {x: 50, y: 120});
        await browser.sleep(500);
        expect(await successDiv.isDisplayed()).to.be.true;
      });
    });
  });
});
