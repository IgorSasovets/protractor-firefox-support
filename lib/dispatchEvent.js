'use strict';

/**
  * @example
  *  Dispatch certain event to specified element
  *  browser.executeScript(support.dispatchEvent, {eventType: 'focus',
  *     selector: '#block'})
  *  browser.executeScript(support.dispatchEvent, {eventType: 'click',
  *     selector: '.md-icon-button', elementIndex: 3})
  *
  *
  * @param {Object} options Object that contains user defined settings. If you want
  *  dispatch certain event to specified element you need to set [eventType] and [selector]
  *  properties. If there are more than one element that match specified selector you
  *  can additionaly set [elementIndex] property. Also, if you want trigger mouse event
  *  (mouseover, mouseleave, .etc) please set [isMouseEvent] option to true.
  */

module.exports = `function dispatchEventToElement(options) {
  if (!options || typeof options !== 'object') {
      throw new Error('Error!Options not defined!');
  }

  if (!options.selector) {
      throw new Error('Error!Element selector not defined!');
  }

  if (!options.eventType) {
    throw new Error('Error!Event type not defined!');
  }

  try {
    let element;
    if (options.elementIndex !== undefined) {
        const elementsArray = document.querySelectorAll(options.selector);
        element = elementsArray[options.elementIndex];
    } else {
        element = document.querySelector(options.selector);
    }

    const tgtEvent = (options.isMouseEvent) ? new MouseEvent(options.eventType) :
      new Event(options.eventType);
    element.dispatchEvent(tgtEvent);
  } catch (err) {
    throw new Error(err);
  }
}

dispatchEventToElement(arguments[0]);`;
