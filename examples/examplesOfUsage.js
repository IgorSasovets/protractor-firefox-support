const helper = require('<path to \'support.js\' file>/support');

async performDnD({dragElementSelector = '<selector>', dragElementIndex = <some_index>,
    draggable = false} = {}) {
    const dropPoint = {x: 100, y: 100};
    const options = {makeDraggable: draggable, dragElemIndex: dragElementIndex, dropLocation: dropPoint};
    return browser.executeScript(helper.dragAndDrop, dragElementSelector, null, options);
}

async openElementContextMenu(selector) {
    return browser.executeScript(helper.rightMouseBtnClick, selector, {elemIndex: 0, location: {x: 100, y: 100}});
}

mouseUp(pointCoordinates = {x: 100, y: 100}) {
    return browser.executeScript(helper.mouseUp, pointCoordinates);
}
