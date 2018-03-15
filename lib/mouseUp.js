'use strict';

/**
 * @example
 * browser.executeScript(support.mouseUp, {point: {x: 130, y: 20}})
 *
 * @param {Object} point Point in browser window where event will happen
 */

module.exports = `function mouseUp(point) {
    const evt = document.createEvent('MouseEvents');
    if (point && typeof point === 'object') {
        evt.initMouseEvent('mouseup', true, true, window, 1, point.x, point.y, point.x, point.y, false, false, false,
            false, 0, null);
    } else {
        evt.initMouseEvent('mouseup', true, true, window, 1, 1, 1, 1, 1, false, false, false,
            false, 0, null);
    }
    document.body.dispatchEvent(evt);
}

mouseUp(arguments[0]);`;
