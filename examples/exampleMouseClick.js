'use strict';
const { expect } = require('chai');
const support = require('protractor-firefox-support');
const params = browser.params;

describe('Mouse events functions tests', () => {
  describe('mouseRightClick function test', () => {
    beforeAll(() => {
      return browser.get(params.rightClickTemplateUrl);
    });
    it('Should open context menu on right click', async() => {
       const clickTgt = $('.hasMenu');
       const contextMenu = $$('.k-item.k-state-default.k-first').first();
       await browser.wait(protractor.ExpectedConditions.visibilityOf(clickTgt), 5000);
       const location = await clickTgt.getLocation();
       await browser.executeScript(support.rightMouseBtnClick, '.hasMenu',
         {location: {x: Math.floor(location.x), y: Math.floor(location.y)}});
       await browser.sleep(1000);
       expect(await contextMenu.isDisplayed()).to.be.true;
    });
 });
});
