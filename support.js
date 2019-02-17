const dragAndDrop = require('./lib/dragAndDrop'),
	mouseUp = require('./lib/mouseUp'),
	mouseClick = require('./lib/mouseClick'),
	mouseDown = require('./lib/mouseDown'),
	mouseMove = require('./lib/mouseMove'),
	rightMouseBtnClick = require('./lib/rightMouseButtonClick'),
	changeInputText = require('./lib/changeInputText'),
	dispatchEvent = require('./lib/dispatchEvent');

module.exports = {
	dragAndDrop: dragAndDrop,
	mouseUp: mouseUp,
	mouseClick: mouseClick,
	mouseDown: mouseDown,
	mouseMove: mouseMove,
	rightMouseBtnClick: rightMouseBtnClick,
	changeInputText: changeInputText,
	dispatchEvent: dispatchEvent
}
