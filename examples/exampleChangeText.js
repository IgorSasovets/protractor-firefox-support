'use strict';
const { expect } = require('chai');
const support = require('protractor-firefox-support');
const params = browser.params;
const EC = protractor.ExpectedConditions;

describe('Change input text UI tests', () => {
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
