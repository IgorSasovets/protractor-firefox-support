'use strict';

module.exports = `function selectDropDown(dropDownIndex, optionName) {
  const dropDown = document.querySelectorAll('mat-select')[dropDownIndex];
  dropDown.click();
  const dropDownOptions = document.querySelectorAll('mat-option');
  const optionsTitles = Array.prototype.map.call(dropDownOptions, item => item.innerText);
  const tgtOptionIndex = optionsTitles.indexOf(optionName);
  dropDownOptions[tgtOptionIndex].click();
}

selectDropDown(arguments[0], arguments[1]);`;
