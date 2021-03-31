protractor-firefox-support
--------------------------

This is custom implementation of [Actions](https://seleniumhq.github.io/selenium/docs/api/java/org/openqa/selenium/interactions/Actions.html) class functions
for e2e testing using Protractor framework in Firefox browser.
If you use it, ⭐️ it.

Installation
------------

You can simply install it into your project using this command:

```
npm install protractor-firefox-support --save
```

Examples of usage
-----------------

Here are examples of custom functions usage. Functions presented as separated
modules which can be imported in test files:

dragAndDrop (complete example [here](https://github.com/IgorSasovets/protractor-firefox-support/blob/master/examples/exampleDND.js))
------------

```
const support = require('protractor-firefox-support');

module.exports.performDnD = ({dragElmSelector = '.btn.btn-primary', dragElmIndex,
    draggable = false} = {}) => {
    const dropPoint = {x: 100, y: 100};
    const options = {makeDraggable: draggable, dropLocation: dropPoint};

    /**
     *  You can define dragElement index if there are more than
     *  one element with specified selector.
     */

    (dragElmIndex) ? options.dragElemIndex = dragElmIndex : null;

    /**
     *  Also you can pass selector instead of null, if you want to specify
     *  drop element.
     */
    return browser.executeScript(support.dragAndDrop, dragElmSelector, null, options);
}
```

openContextMenu(rightMouseClick, complete example [here](https://github.com/IgorSasovets/protractor-firefox-support/blob/master/examples/exampleMouseActions.js))
--------------------------------

```
const support = require('protractor-firefox-support');

module.exports.openElementContextMenu = ({selector, elemIndex} = {}) => {
    const options = {location: {x: 100, y: 100}};

    /**
     *  If there are more elements which match specified selector, add elemIndex option.
     *  Property 'location' defines screen coordinates where context menu will be opened.
     */

    (elemIndex) ? options.elemIndex = elemIndex : null;
    return browser.executeScript(support.rightMouseBtnClick, selector, options);
}
```

mouseUp (complete example [here](https://github.com/IgorSasovets/protractor-firefox-support/blob/master/examples/exampleMouseActions.js))
-------

```
const support = require('protractor-firefox-support');

module.exports.mouseUp = (pointCoordinates = {x: 100, y: 100}) => {
    return browser.executeScript(support.mouseUp, pointCoordinates);
}
```

mouseMove (complete example [here](https://github.com/IgorSasovets/protractor-firefox-support/blob/master/examples/exampleMouseActions.js))
---------

```
const support = require('protractor-firefox-support');

module.exports.mouseMove = (pointCoordinates = {x: 100, y: 100}) => {
    return browser.executeScript(support.mouseMove, pointCoordinates);
}
```

mouseDown (complete example [here](https://github.com/IgorSasovets/protractor-firefox-support/blob/master/examples/exampleMouseActions.js))
---------

```
const support = require('protractor-firefox-support');

module.exports.mouseDown = ({selector, index} = {}) => {
    /**
     *  If there are more elements which match specified selector, add elementIndex option.
     */
    return browser.executeScript(support.mouseDown, {elementSelector: selector,
      elementIndex: index});
}
```

mouseClick (complete example [here](https://github.com/IgorSasovets/protractor-firefox-support/blob/master/examples/exampleMouseClick.js))
----------

```
const support = require('protractor-firefox-support');

module.exports.mouseClick = ({elemSelector, point, tgtIndex} = {}) => {
   const options = {};
   (elemSelector) ? options.selector = elemSelector : null;
   (point) ? options.point = point : null;
   (tgtIndex) ? options.elementIndex = tgtIndex : null;
   return browser.executeScript(support.mouseClick, options);
}
```

changeInputText(beta, complete example [here](https://github.com/IgorSasovets/protractor-firefox-support/blob/master/examples/exampleChangeText.js))
---------------------

```
const support = require('protractor-firefox-support');

module.exports.changeInputText = (selector, text, {elemIndex} = {}) => {
    /**
    *  If there are more elements which match specified selector, add elemIndex option.
    */
    const options = {};
    (elemIndex) ? options.elemIndex = elemIndex : null;
    return browser.executeScript(support.changeInputText, selector, text, options);
} 
```

dispatchEvent(complete example [here](https://github.com/IgorSasovets/protractor-firefox-support/blob/master/examples/exampleDispatchEvent.js))
---------------------

```
const support = require('protractor-firefox-support');

module.exports.dispatchEvent = ({selector, tgtIndex, eventType, isMouseEvent, eventArguments} = {}) => {
    /**
    *  If there are more elements which match specified selector, add elementIndex option.
    */
    const options = {selector, eventType, isMouseEvent, eventArguments};
    (tgtIndex) ? options.elementIndex = tgtIndex : null;
    return browser.executeScript(support.dispatchEvent, options);
} 
```

createEvent(complete example [here](https://github.com/IgorSasovets/protractor-firefox-support/blob/master/examples/exampleCreateEvent.js))
---------------------

**WARNING!**

This function is experimental and is not fully supported. If you have working examples and implementations for events that are
not covered yet (currently, `contextmenu` has a separate implementation with examples), feel free to open a PR for it.

```
const support = require('protractor-firefox-support');

module.exports.createEvent = ({selector, tgtIndex, eventType, eventName, eventArguments} = {}) => {
    /**
    *  If there are more elements which match specified selector, add elementIndex option.
    */
    const options = {selector, eventType, eventName, eventArguments};
    (tgtIndex) ? options.elementIndex = tgtIndex : null;
    return browser.executeScript(support.createEvent, options);
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
