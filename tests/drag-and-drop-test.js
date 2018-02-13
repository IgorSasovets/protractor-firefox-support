'use strict';
const support = require('../support');
const params = browser.params;

describe('Custom DnD function tests', () => {
  const div = $('.btn.btn-primary');
  beforeEach(() => {
      return browser.get(params.dndTemplateUrl);
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
            return browser.sleep(2000);
        })
        .then(() => {
            expect(successDiv.isDisplayed()).toBe(true);
        });
      });
  });
  describe('Negative', () => {
    describe('Call DnD without required parameters', () => {
      it('Should confirm that function throws error without specified elements selectors', () => {
        return browser.wait(protractor.ExpectedConditions.visibilityOf(div), 5000)
          .then(() => {
            return browser.executeScript(support.dragAndDrop);
          })
          .catch(err => {
            expect(err.toString().indexOf('Error!Element selector not defined'))
              .not.toEqual(-1);
          });
      });
      /*
       * Here we'll get 'not specified selector error' because dropElementSelector
       * will be converted to null in DnD function.
       */
      it('Should confirm that function throws error with uncorrect dropElemSelector', () => {
        let dropElemSelector;
        return browser.wait(protractor.ExpectedConditions.visibilityOf(div), 5000)
          .then(() => {
            return browser.executeScript(support.dragAndDrop, 'dragElemSelector', dropElemSelector,
              {});
          })
          .catch(err => {
            expect(err.toString().indexOf('Error!Cannot get element with specified selector'))
              .not.toEqual(-1);
          });
      });
      it('Should confirm that function throws error when options parameter not specified', () => {
          return browser.executeScript(support.dragAndDrop, 'dragElemSelector', 'dropElemSelector')
            .catch(err => {
              expect(err.toString().indexOf('Options not specified!'))
                .not.toEqual(-1);
            });
      });
    });
  });
});
