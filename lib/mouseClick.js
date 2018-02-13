module.exports = `function mouseLeftClick(options) {
  if (!options || typeof options != 'object') {
      throw new Error('Error!Options not defined!');
  }

  if (!options.selector && !options.point) {
      throw new Error('Error!Element selector and/or click point not defined!');
  }

  if (options.point) {
      const clickPoint = document.elementFromPoint(options.point.x, options.point.y);
      clickPoint.click();
  } else {
      let element;
      if (options.elementIndex != undefined) {
          const elementsArray = document.querySelectorAll(options.selector);
          element = elementsArray[options.elementIndex];
      } else {
          element = document.querySelector(options.selector);
      }
      element.click();
  }
}

mouseLeftClick(arguments[0]);`;
