'use strict';
const { expect } = require('chai');
const { browser } = require('protractor');
const support = require('../support');
const params = browser.params;
const EC = protractor.ExpectedConditions;

describe('Create event UI tests', () => {
    describe('Dispatch contextmenu event to element', () => {
        const openMenuButton = $('.context-menu-one');
        beforeAll(async() => {
            browser.ignoreSynchronization = true;
            await browser.get(params.contextMenujQueryDemo);
            await browser.wait(EC.elementToBeClickable(openMenuButton), 7000);
        });
        it('Should open element context menu', async() => {
            const contextMenuOptions = $$('.context-menu-item');
            await browser.executeScript(support.createEvent, {selector: '.context-menu-one',
                eventType: 'MouseEvent', eventName: 'contextmenu'});
            await browser.sleep(500);
            expect(await contextMenuOptions.count()).to.equal(7);
        });
    });
});
