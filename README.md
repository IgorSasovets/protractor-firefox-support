This is custom implementation of commonly used functions
for e2e testing using Protractor framework in Firefox browser.

Here is examples of custom functions usage:

```
const helper = require('../support');

async performDnD({dragElementSelector = '<selector>', dragElementIndex = <some_index>,
    draggable = false} = {}) {
    const dropPoint = {x: 100, y: 100};
    const options = {makeDraggable: draggable, dragElemIndex: dragElementIndex, dropLocation: dropPoint};
    return browser.executeScript(helper.dragAndDrop, dragElementSelector, null, options);
}

async openElementContextMenu(selector) {
    return browser.executeScript(helper.mouseRightClick, selector, {elemIndex: 0, location: {x: 100, y: 100}});
}

mouseUp(pointCoordinates = {x: 100, y: 100}) {
    return browser.executeScript(helper.mouseUp, pointCoordinates);
}
```
