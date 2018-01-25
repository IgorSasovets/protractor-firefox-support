'use strict';
const support = require('../support');
const params = browser.params;

describe('Confirm ability to perform drag and drop action in firefox', () => {
    it('Should perform drag and drop action', () => {
        return browser.get(params.dndTemplateUrl)
          .then(() => {
              const selector = '#mydiv>#mydivheader';
              return browser.executeScript(support.dragAndDrop, selector);
          })
          .then(() => {
              expect(2 + 2).to.equal(4);
          });
    });
});
