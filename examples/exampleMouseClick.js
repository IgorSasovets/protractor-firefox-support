'use strict';
const support = require('protractor-firefox-support');
const params = browser.params;

describe('Mouse events functions tests', () => {
    describe('mouseClick function test', () => {
      beforeAll(() => {
        return browser.get(params.clickTemplateUrl);
      });
      it('Should perform click on elements', function() {
        const clickTgt = $$('.md-icon-button').get(5);
        const notificationsOffIcon = $('#notifications-off');
        return browser.wait(protractor.ExpectedConditions.visibilityOf(clickTgt), 5000)
          .then(() => browser.executeScript(support.mouseClick, {selector: '.md-icon-button',
            elementIndex: 5}))
          .then(() => browser.sleep(500))
          .then(() => {
            expect(notificationsOffIcon.isDisplayed()).toBe(true);
          });
      });
    });
});
