'use strict';
const support = require('../support');
const params = browser.params;

describe('Custom DnD function tests', () => {
  describe('Positive', () => {
    const div = $('.btn.btn-primary');
    /*
     *  In example below we need some extra wait to finish mouseUp action
     *  and only after it perform comparison.
     */
    describe('Confirm ability to perform DnD action using mouse eventsin firefox', () => {
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
  describe('Negative', () => {
    describe('Negative tests on mouseMove action', () => {
      it('Should throw <tgtPoint is not defined> exception when tgtPoint not defined', function() {
        return browser.executeScript(support.mouseMove)
          .catch(err => {
            expect(err.toString().indexOf('Error!Target point not defined!'))
              .not.toEqual(-1);
          });
      });
      it('Should throw <tgtPoint is not defined> exception when tgtPoint is not an object', function() {
        return browser.executeScript(support.mouseMove, 'some string')
          .catch(err => {
            expect(err.toString().indexOf('Error!Target point not defined!'))
              .not.toEqual(-1);
          });
      });
    });
    describe('Negative tests on mouseDown action', () => {
      it('Should throw <options not defined> exception when options not defined', function() {
        return browser.executeScript(support.mouseDown)
          .catch(err => {
            expect(err.toString().indexOf('Error!Options not defined!'))
              .not.toEqual(-1);
          });
      });
      it('Should throw <options not defined> exception when options is not an object', function() {
        return browser.executeScript(support.mouseDown, 'some string')
          .catch(err => {
            expect(err.toString().indexOf('Error!Options not defined!'))
              .not.toEqual(-1);
          });
      });
    });
    describe('Negative tests on mouseClick action', () => {
      it('Should throw <options not defined> exception in appropriate case', function() {
        return browser.executeScript(support.mouseClick)
          .catch(err => {
            expect(err.toString().indexOf('Error!Options not defined!'))
              .not.toEqual(-1);
          });
      });
      it('Should throw exception when options do not contains any properties', function() {
        return browser.executeScript(support.mouseClick, {})
          .catch(err => {
            expect(err.toString().indexOf('Error!Element selector and/or click point not defined!'))
              .not.toEqual(-1);
          });
      });
    });
  });
});
