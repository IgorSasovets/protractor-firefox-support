'use strict';

/**
  * @example
  *  Dispatch event to specified element
  *  browser.executeScript(support.changeInputText, 'input[ng-model=\'yourName\']', userName)
  *  browser.executeScript(support.changeInputText, 'input[ng-model=\'password\']', password,
  *     {elemIndex: 0})
  *
  * @param {String} elemSelector Selector of input element which text value want
  * change.
  * @param {String|Number} text Text which you want send to input.
  * @param {Object} options Additional options such as elemIndex which
  * helps you to select appropriate input from list of elements with
  * same selectors.
  */

module.exports = `function changeInputText(elemSelector, text, options) {
    if (!elemSelector || !text)
        throw new Error("Error! Element selector or text value not defined!");
    
    var inputElement;

    if (options && options.elemIndex) {
        inputElement = document.querySelectorAll(elemSelector)[options.elemIndex];
    } else {
        inputElement = document.querySelector(elemSelector);
    }

    if (inputElement === null)
        throw new Error('Error! Cannot find element using selector ' + elemSelector);
    else {
        inputElement.focus();
        inputElement.value = text;
        inputElement.blur();
        inputElement.dispatchEvent(new Event("change"));
    }
}

changeInputText(arguments[0], arguments[1], arguments[2]);
`;
