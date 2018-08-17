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

dragAndDrop
-----------

```
const helper = require('protractor-firefox-support');

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
    return browser.executeScript(helper.dragAndDrop, dragElmSelector, null, options);
}
```

openContextMenu(rightMouseClick)
--------------------------------

```
const helper = require('protractor-firefox-support');

module.exports.openElementContextMenu = ({selector, elemIndex} = {}) => {
    const options = {location: {x: 100, y: 100}};

    /**
     *  If there are more elements which match specified selector, add elemIndex option.
     *  Property 'location' defines screen coordinates where context menu will be opened.
     */

    (elemIndex) ? options.elemIndex = elemIndex : null;
    return browser.executeScript(helper.rightMouseBtnClick, selector, options);
}
```

mouseUp
-------

```
const helper = require('protractor-firefox-support');

module.exports.mouseUp = (pointCoordinates = {x: 100, y: 100}) => {
    return browser.executeScript(helper.mouseUp, pointCoordinates);
}
```

mouseMove
---------

```
const helper = require('protractor-firefox-support');

module.exports.mouseMove = (pointCoordinates = {x: 100, y: 100}) => {
    return browser.executeScript(helper.mouseMove, pointCoordinates);
}
```

mouseDown
---------

```
const helper = require('protractor-firefox-support');

module.exports.mouseDown = ({selector, index} = {}) => {
    /**
     *  If there are more elements which match specified selector, add elementIndex option.
     */
    return browser.executeScript(helper.mouseDown, {elementSelector: selector,
      elementIndex: index});
}
```

mouseClick
----------

```
const helper = require('protractor-firefox-support');

module.exports.mouseClick = ({elemSelector, point, elemIndex} = {}) => {
   const options = {};
   (elemSelector) ? options.selector = elemSelector : null;
   (point) ? options.point = point : null;
   (elemIndex) ? options.elementIndex = elemIndex : null;
   return browser.executeScript(helper.mouseLeftClick, options);
}
```

changeInputText(beta)
---------------------

```
const helper = require('protractor-firefox-support');

module.exports.changeInputText = (selector, text, {elemIndex} = {}) => {
    /**
    *  If there are more elements which match specified selector, add elemIndex option.
    */
    const options = {};
    (elemIndex) ? options.elemIndex = elemIndex : null;
    return browser.executeScript(support.changeInputText, selector, text, options);
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
