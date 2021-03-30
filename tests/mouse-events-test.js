'use strict';
const { expect } = require('chai');
const support = require('../support');
const params = browser.params;

describe('Mouse events functions tests', () => {
  describe('Positive', () => {
    const div = $('.btn.btn-primary');
    /*
     *  In example below we need some extra wait to finish mouseUp action
     *  and only after it check expectation.
     */
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
    describe('mouseClick function test', () => {
      beforeAll(() => {
        return browser.get(params.clickTemplateUrl);
      });
      it('Should perform click on elements', async() => {
        const clickTgt = $$('.md-menu .md-icon-button').first();
        const notificationsOffIcon = $('md-icon[md-svg-icon="social:notifications-off"]');
        await browser.wait(protractor.ExpectedConditions.visibilityOf(clickTgt), 5000);
        await browser.executeScript(support.mouseClick, {selector: '.md-menu .md-icon-button',
          elementIndex: 0});
        await browser.sleep(500);
        expect(await notificationsOffIcon.isDisplayed()).to.be.true;
      });
    });
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
  describe('Negative', () => {
    describe('Negative tests on mouseMove action', () => {
      it('Should throw <tgtPoint is not defined> exception when tgtPoint not defined', function() {
        return browser.executeScript(support.mouseMove)
          .catch(err => {
            expect(err.toString().indexOf('Error!Target point not defined!'))
              .not.to.equal(-1);
          });
      });
      it('Should throw <tgtPoint is not defined> exception when tgtPoint is not an object', function() {
        return browser.executeScript(support.mouseMove, 'some string')
          .catch(err => {
            expect(err.toString().indexOf('Error!Target point not defined!'))
              .not.to.equal(-1);
          });
      });
    });
    describe('Negative tests on mouseDown action', () => {
      it('Should throw <options not defined> exception when options not defined', function() {
        return browser.executeScript(support.mouseDown)
          .catch(err => {
            expect(err.toString().indexOf('Error!Options not defined!'))
              .not.to.equal(-1);
          });
      });
      it('Should throw <options not defined> exception when options is not an object', function() {
        return browser.executeScript(support.mouseDown, 'some string')
          .catch(err => {
            expect(err.toString().indexOf('Error!Options not defined!'))
              .not.to.equal(-1);
          });
      });
    });
    describe('Negative tests on mouseClick action', () => {
      it('Should throw <options not defined> exception in appropriate case', function() {
        return browser.executeScript(support.mouseClick)
          .catch(err => {
            expect(err.toString().indexOf('Error!Options not defined!'))
              .not.to.equal(-1);
          });
      });
      it('Should throw exception when options do not contains any properties', function() {
        return browser.executeScript(support.mouseClick, {})
          .catch(err => {
            expect(err.toString().indexOf('Error!Element selector and/or click point not defined!'))
              .not.to.equal(-1);
          });
      });
    });
  });
});
