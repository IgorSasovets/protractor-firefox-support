'use strict';
const { expect } = require('chai');
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
            const expandedPanels = $$('.mat-expansion-panel-content .mat-expansion-panel-body');
            expect(await expandedPanels.count()).to.equal(2);
            expect(await expandedPanels.first().getText()).to.equal('This is the primary content of the panel.');
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
            expect(await contextMenuOption.isPresent()).to.be.true;
        });
    });
    describe('Dispatch contextmenu event to element with eventArguments', () => {
        const openMenuButton = $('.context-menu-one');
        beforeAll(async() => {
            browser.ignoreSynchronization = true;
            await browser.get(params.contextMenujQueryDemo);
            await browser.wait(EC.elementToBeClickable(openMenuButton), 7000);
        });
        it('Should open element context menu', async() => {
            const contextMenuOptions = $$('.context-menu-item');
            await browser.executeScript(support.dispatchEvent, {selector: '.context-menu-one',
                eventType: 'contextmenu', eventArguments: {bubbles: true}});
            await browser.sleep(500);
            expect(await contextMenuOptions.count()).to.equal(7);
        });
    });
    describe('Dispatch mouseover event to element', () => {
        beforeAll(async() => {
            const emailButton = $('.TK-Aside-Menu-Item.TK-bn');
            browser.ignoreSynchronization = true;
            await browser.get(params.mouseOverDemo);
            await browser.wait(EC.elementToBeClickable(emailButton), 7000);
        });
        it('Should open element context menu using mouseover event', async() => {
            const contextMenuOption = element(by.cssContainingText('ul.TK-Dropdown a.TK-Dropdown-Link',
                'jQuery'));
            await browser.executeScript(support.dispatchEvent, {selector: '.TK-Menu-Item',
                eventType: 'mouseenter', elementIndex: 1, isMouseEvent: true});
            await browser.sleep(500);
            expect(await contextMenuOption.isPresent()).to.be.true;
        });
    });
});