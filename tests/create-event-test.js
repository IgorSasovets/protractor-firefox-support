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

describe('Create event error handling tests', () => {
    describe('Parameters validation errors handling', () => {
        it('Should confirm that function throws error if options weren\'t specified', () => {
            return browser.executeScript(support.createEvent)
                .catch(err => {
                    expect(err.toString().indexOf('Options not defined!'))
                        .not.to.equal(-1);
                });
        });
        it('Should confirm that function throws error if \'selector\' parameter wasn\'t specified', () => {
            return browser.executeScript(support.createEvent, {eventType: 'focus'})
                .catch(err => {
                    expect(err.toString().indexOf('Element selector not defined!'))
                        .not.to.equal(-1);
                });
        });
        it('Should confirm that function throws error if \'eventType\' parameter wasn\'t specified', () => {
            return browser.executeScript(support.createEvent, {selector: '.btn'})
                .catch(err => {
                    expect(err.toString().indexOf('Event type not defined!'))
                        .not.to.equal(-1);
                });
        });
        it('Should confirm that function throws error if \'eventName\' parameter wasn\'t specified', () => {
            return browser.executeScript(support.createEvent, {selector: '.btn', eventType: 'MouseEvent'})
                .catch(err => {
                    expect(err.toString().indexOf('Event name not defined!'))
                        .not.to.equal(-1);
                });
        });
        it('Should confirm that function throws error if \'eventArguments\' parameter is not an object', () => {
            return browser.executeScript(support.createEvent, {selector: '.btn', eventType: 'MouseEvent',
                eventName: 'mousedown', eventArguments: 'string'})
                .catch(err => {
                    expect(err.toString().indexOf('Event arguments should be an object!'))
                        .not.to.equal(-1);
                });
        });
    });

    describe('Element absence errors handling', () => {
        beforeAll(async() => {
            await browser.get(params.angularjsOrg);
            await browser.wait(EC.elementToBeClickable($('.hero .button-large.button-primary')), 7000);
        });
        it('Should confirm that function throws error if element not found', async() => {
            const elemSelector = 'button>.absent-element';
            return browser.executeScript(support.createEvent, {selector: elemSelector, eventType: 'MouseEvent',
                eventName: 'mouseclick'})
                .catch(err => {
                    expect(err.toString().indexOf('element is null')).not.to.equal(-1);
                });
        });
    });
});
