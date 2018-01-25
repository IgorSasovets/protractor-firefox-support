module.exports = `function mouseLeftClick(selector, point, elementIndex) {
    let element;

    if (!selector || !point) {
        throw new Error('Error!Element selector and/or click point not defined!');
    }

    if (elementIndex !== undefined) {
        const elementsArray = document.querySelectorAll(selector);
        element = elementsArray[elementIndex];
    } else {
        element = document.querySelector(selector);
    }

    const mouseDown = document.createEvent('MouseEvents');
    mouseDown.initMouseEvent('mousedown', true, true, window, 1, point.x, point.y, point.x, point.y, false, false,
        false, false, 0, null);
    element.dispatchEvent(mouseDown);
    const mouseUp = document.createEvent('MouseEvents');
    mouseUp.initMouseEvent('mouseup', true, true, window, 1, point.x, point.y, point.x, point.y, false, false,
        false, false, 0, null);
    element.dispatchEvent(mouseUp);
}

mouseLeftClick(arguments[0], arguments[1], arguments[2]);`;
