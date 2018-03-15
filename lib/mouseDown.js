'use strict';

/**
 *  @example
 *  Dispatch event to specified element
 *  browser.executeScript(support.mouseDown, {elementSelector: '.btn.btn-primary'})
 *  browser.executeScript(support.mouseDown, {elementSelector: '.btn', elementIndex: 1})
 *
 *  Dispatch event to specified point
 *  browser.executeScript(support.mouseDown, {point: {x: 100, y: 100}})
 *
 *  @param {Object} options Object that contains different set of options depending
 *  on user needs. For example, if you want to dispatch this event to specified element
 *  you set property [elementSelector]. If there are more than one element that match
 *  specified selector you can additionaly set [elementIndex] property. On other hand,
 *  when you need to simulate mouseDown event on specified point, just set [point] property.
 */

module.exports = `function mouseDown(options) {
    let element;

    if (!options || typeof options != 'object') {
      throw new Error('Error!Options not defined!');
    }

    const evt = document.createEvent('MouseEvents');
    if (options.point != undefined) {
        evt.initMouseEvent('mousedown', true, true, window, 1, point.x, point.y, point.x, point.y, false, false, false,
            false, 0, null);
        document.body.dispatchEvent(evt);
    } else {
        if (options.elementIndex != undefined) {
            const elementsArr = document.querySelectorAll(options.elementSelector);
            element = elementsArr[options.elementIndex];
        } else {
            element = document.querySelector(options.elementSelector);
        }
        evt.initMouseEvent('mousedown', true, true, window, 1, 1, 1, 1, 1, false, false, false,
            false, 0, null);
        element.dispatchEvent(evt);
    }
}

mouseDown(arguments[0]);`;
