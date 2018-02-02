'use strict';

module.exports = `function mouseDown(options) {
    let element;
    const evt = document.createEvent('MouseEvents');
    if (options.point != undefined) {
        evt.initMouseEvent('mousedown', true, true, window, 1, point.x, point.y, point.x, point.y, false, false, false,
            false, 0, null);
    } else {
        if (options.elementIndex != undefined) {
            const elementsArr = document.querySelectorAll(options.elementSelector);
            element = elementsArr[options.elementIndex];
        } else {
            element = document.querySelector(options.elementSelector);
        }
        evt.initMouseEvent('mousedown', true, true, window, 1, 1, 1, 1, 1, false, false, false,
            false, 0, null);
    }
    element.dispatchEvent(evt);
}

mouseDown(arguments[0]);`;
