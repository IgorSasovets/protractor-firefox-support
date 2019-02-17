'use strict';
const support = require('../support');
const params = browser.params;
const EC = protractor.ExpectedConditions;

describe('Dispatch event UI tests', () => {
    describe('Dispatch click event to element', () => {
        beforeAll(async() => {
            await browser.get(params.expansionPanelUrl);
            await browser.wait(EC.elementToBeClickable($$('.mat-expansion-panel-header').first()), 7000);
        });
        it('Should expand panel with \'Personal data\'', async() => {
            await browser.executeScript(support.dispatchEvent, {selector: '.mat-expansion-panel-header',
                eventType: 'click', elementIndex: 0});
            expect($('input[placeholder=\'First name\']').isPresent()).toBe(true);
        });
    });
    describe('Dispatch contextmenu event to element', () => {
        beforeAll(async() => {
            const closeMenuButton = $('.demo-left-sidebar-toggle-button');
            browser.ignoreSynchronization = true;
            await browser.get(params.contextMenuDemo);
            await browser.wait(EC.elementToBeClickable(closeMenuButton), 7000);
            await closeMenuButton.click();
        });
        it('Should open element context menu', async() => {
            const contextMenuOption = $$('button.demo-menu-item').first();
            await browser.executeScript(support.dispatchEvent, {selector: '#graphComponent',
                eventType: 'contextmenu'});
            await browser.sleep(2000);
            expect(contextMenuOption.isPresent()).toBe(true);
        });
    });
});