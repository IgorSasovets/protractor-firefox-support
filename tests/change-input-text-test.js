'use strict';
const { expect } = require('chai');
const support = require('../support');
const params = browser.params;
const EC = protractor.ExpectedConditions;

describe('Change input text UI tests', () => {
    beforeAll(() => browser.waitForAngularEnabled(false));
    beforeEach(async() => {
        await browser.get(params.angularjsOrg);
        await browser.wait(EC.elementToBeClickable($('.hero .button-large.button-primary')), 7000);
    });
    it('Should type user name', async() => {
        const userName = 'Bob';
        await browser.executeScript(support.changeInputText, 'input[ng-model=\'yourName\']', userName);
        expect(await $('.span4>.well h1').getText()).to.equal(`Hello ${userName}!`);
    });
    it('Should type user name to input selected using elemIndex option', async() => {
        const userName = 'Alice';
        await browser.executeScript(support.changeInputText, 'input', userName, {elemIndex: 0});
        expect(await $('.span4>.well h1').getText()).to.equal(`Hello ${userName}!`);
    });
});

describe('Change input text error handling tests', () => {
    describe('Parameters validation errors handling', () => {
        it('Should confirm that function throws error if element selector not set', () => {
            return browser.executeScript(support.changeInputText)
                .catch(err => {
                    expect(err.toString().indexOf('Element selector or text value not defined!'))
                        .not.to.equal(-1);
                });
        });
        it('Should confirm that function throws error if text parameter not set', () => {
            return browser.executeScript(support.changeInputText, 'button')
                .catch(err => {
                    expect(err.toString().indexOf('Element selector or text value not defined!'))
                        .not.to.equal(-1);
                });
        });
    });

    describe('Element absence errors handling', () => {
        beforeAll(async() => {
            await browser.get(params.angularjsOrg);
            await browser.wait(EC.elementToBeClickable($('.hero .button-large.button-primary')), 7000);
        });
        it('Should confirm that function throws error if element not found', () => {
            const elemSelector = 'button>.absent-element';
            return browser.executeScript(support.changeInputText, elemSelector, 'Default')
                .catch(err => {
                    expect(err.toString().indexOf('Cannot find element using selector ' + elemSelector))
                        .not.to.equal(-1);
                });
        });
    });
});
