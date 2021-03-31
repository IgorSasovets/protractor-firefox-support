'use strict';

/**
  * @example
  *  Dispatch certain event (created using createEvent method) to specified element
  *  browser.executeScript(support.createEvent, {eventType: 'contextmenu',
  *     selector: '#block'})
  *
  * @param {Object} options Object that contains user defined settings. If you want
  *  dispatch certain event to specified element you need to set [eventType] and [selector]
  *  properties. If there are more than one element that match specified selector you
  *  can additionaly set [elementIndex] property. Event name (mouseover, keydown, .etc) can be
  *  specified using [eventName]. 
  *  [eventArguments] allows you to set additional options for an event. For example,
  *  {bubbles: true} .
  */

module.exports = `function createEventForElement(options) {
  if (!options || typeof options !== 'object') {
      throw new Error('Error! Options not defined!');
  }

  if (!options.selector) {
      throw new Error('Error! Element selector not defined!');
  }

  if (!options.eventType) {
    throw new Error('Error! Event type not defined!');
  }

  if (!options.eventName) {
    throw new Error('Error! Event name not defined!');
  }

  if (options.eventArguments && typeof options.eventArguments != 'object') {
    throw new Error('Error! Event arguments should be an object!');
  }

  try {
    let element, tgtEvent = document.createEvent(options.eventType);
    if (options.elementIndex !== undefined) {
        const elementsArray = document.querySelectorAll(options.selector);
        element = elementsArray[options.elementIndex];
    } else {
        element = document.querySelector(options.selector);
    }

    switch (options.eventName) {
      case 'contextmenu': {
        tgtEvent.initMouseEvent(options.eventName, true, false, document.defaultView, 1, 0, 0, 0, 0, false, false, false, false, 2, null);
      } break;
      default: {
        tgtEvent.initEvent(options.eventName, true, true);
        if (options.eventArguments)
          for (const key of Object.keys(options.eventArguments)) {
            tgtEvent[key] = options.eventArguments[key];
          }
      }
    }
   
    element.dispatchEvent(tgtEvent);
  } catch (err) {
    throw new Error(err);
  }
}

createEventForElement(arguments[0]);`;
