This is custom implementation of commonly used functions
for e2e testing using Protractor framework in Firefox browser.

Here is examples of custom functions usage:

```
const helper = require('<path to \'support.js\' file>/support');

async performDnD({dragElmSelector = '<selector>', dragElmIndex = <some_index>,
    draggable = false} = {}) {
    const dropPoint = {x: 100, y: 100};
    const options = {makeDraggable: draggable, dragElemIndex: dragElmIndex, dropLocation: dropPoint};
    return browser.executeScript(helper.dragAndDrop, dragElmSelector, null, options);
}

async openElementContextMenu(selector) {
    return browser.executeScript(helper.rightMouseBtnClick, selector, {elemIndex: 0, location: {x: 100, y: 100}});
}

mouseUp(pointCoordinates = {x: 100, y: 100}) {
    return browser.executeScript(helper.mouseUp, pointCoordinates);
}

mouseMove(pointCoordinates = {x: 100, y: 100}) {
    return browser.executeScript(helper.mouseMove, pointCoordinates);
}

mouseDown({selector = undefined, index = 0} = {}) {
    return browser.executeScript(helper.mouseDown, {elementSelector: selector,
      elementIndex: index});
}

mouseClick({elemSelector, point, elemIndex} = {}) {
   const options = {};
   (elemSelector) ? options.selector = elemSelector : null;
   (point) ? options.point = point : null;
   (elemIndex) ? options.elementIndex = elemIndex : null;
   return browser.executeScript(helper.mouseLeftClick, options);
}
```
