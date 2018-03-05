protractor-firefox-support
--------------------------

This is custom implementation of commonly used functions
for e2e testing using Protractor framework in Firefox browser.

Installation
------------

You can simply install it into your project using this command:

```
npm install protractor-firefox-support --save
```

Examples of usage
-----------------

Here are examples of custom functions usage:

```
const helper = require('protractor-firefox-support');

performDnD({dragElmSelector = '<selector>', dragElmIndex = <some_index>,
    draggable = false} = {}) {
    const dropPoint = {x: 100, y: 100};
    const options = {makeDraggable: draggable, dragElemIndex: dragElmIndex, dropLocation: dropPoint};
    return browser.executeScript(helper.dragAndDrop, dragElmSelector, null, options);
}

openElementContextMenu(selector) {
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

Run tests
---------

First of all you need to install necessary packages using next command:

```
npm run install-modules-tests
```

Then update webdriver-manager packages, start it and run tests:

```
npm run webdriver-update-windows
npm run webdriver-start-windows
npm run test-windows
```

for Windows or

```
npm run webdriver-update-linux
npm run webdriver-start-linux
npm run test-linux
```

for Linux/MacOS.
