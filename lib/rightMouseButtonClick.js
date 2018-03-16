'use strict';
/**
 * Originally from: https://stackoverflow.com/questions/7914684/trigger-right-click-using-pure-javascript,
 * http://jsfiddle.net/9gbd4/1/. Also take a look at https://github.com/angular/protractor/issues/4672
 * Modified by IgorSasovets (https://github.com/IgorSasovets) to simulate right mouse button click action
 * in Firefox browser (v.57.0.4).
 *
 * @example
 * Context menu will be opened at point {120, 50}
 * browser.executeScript(support.rightMouseBtnClick, '#menu-holder',
 *  {location: {x: 120, y: 50}})
 * browser.executeScript(support.rightMouseBtnClick, '#menu-holder',
 *  {location: {x: 120, y: 50}, elemIndex: 3})
 *
 * @param {String} elemSelector Selector of target element
 * @param {Object} options Custom user defined options. If there are more than
 * one element that match specified selector, you can set [elemIndex] option.
 * Also you have to define [location] property that describes point in browser
 * area where context menu will be opened.
 */

 module.exports = `function mouseRightClick(elemSelector, options) {
     if (!elemSelector && !options) {
       throw new Error('Error!Required parameters not specified!');
     }
     //x and y define place where context menu will be opened
     const x = (options.location.x !== undefined) ? options.location.x : 0;
     const y = (options.location.y !== undefined) ? options.location.y : 0;
     let element;

     if (options.elemIndex !== undefined) {
         element = document.querySelectorAll(elemSelector)[options.elemIndex];
     } else {
         element = document.querySelector(elemSelector);
     }

     if (element === null) {
       throw new Error('Error!Element with specified selector not found!');
     }

     if (document.createEvent) {
         const rightClickDown = document.createEvent('MouseEvents');
         rightClickDown.initMouseEvent(
             'contextmenu', 1, 1, window, 1, x, y, x, y, 0, 0, 0, 0, 2/*right button*/, null
         );
         element.dispatchEvent(rightClickDown);
     } else if (document.createEventObject) { // for IE
         const rightClick = document.createEventObject();
         rightClick.type = 'click';
         rightClick.button = 2;
         element.fireEvent('onclick', rightClick);
     } else {
         alert('Not supported');
     }
 };
 mouseRightClick(arguments[0], arguments[1])`;
