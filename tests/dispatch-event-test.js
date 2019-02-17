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

describe('Dispatch error handling tests', () => {
    describe('Parameters validation errors handling', () => {
        it('Should confirm that function throws error if options weren\'t specified', () => {
            return browser.executeScript(support.dispatchEvent)
                .catch(err => {
                    expect(err.toString().indexOf('Options not defined!'))
                        .not.toEqual(-1);
                });
        });
        it('Should confirm that function throws error if \'selector\' parameter wasn\'t specified', () => {
            return browser.executeScript(support.dispatchEvent, {eventType: 'focus'})
                .catch(err => {
                    expect(err.toString().indexOf('Element selector not defined!'))
                        .not.toEqual(-1);
                });
        });
        it('Should confirm that function throws error if \'eventType\' parameter wasn\'t specified', () => {
            return browser.executeScript(support.dispatchEvent, {selector: '.btn'})
                .catch(err => {
                    expect(err.toString().indexOf('Event type not defined!'))
                        .not.toEqual(-1);
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
            return browser.executeScript(support.dispatchEvent, {selector: elemSelector, eventType: 'click'})
                .catch(err => {
                    expect(err.toString().indexOf('element is null')).not.toEqual(-1);
                });
        });
    });
});
