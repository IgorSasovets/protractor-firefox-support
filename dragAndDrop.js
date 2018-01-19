'use strict';
/**
 * Originally from https://ghostinspector.com/blog/simulate-drag-and-drop-javascript-casperjs/
 * Modified by IgorSasovets (https://github.com/IgorSasovets) to simulate drag and drop movement
 * in Firefox browser (v.57.0.4)
 */

module.exports.triggerDragAndDrop = `function dragAndDrop(selectorDrag, selectorDrop, callback) {
    // fetch target elements

    var elements = document.querySelectorAll("<element_selector>");
    $(elements[1]).draggable(); //makes elements draggable
    $(elements[1]).click();

    var elemDrag = elements[1];
    var elemDrop = document.querySelector("<element_selector>");

    if (!elemDrag || !elemDrop) {
        console.log("can't get elements");
        return false;
    }

    // function for triggering mouse events
    function fireMouseEvent(type, elem, dataTransfer) {
        var evt = document.createEvent('MouseEvents');
        evt.initMouseEvent(type, true, true, window, 1, 1, 1, 0, 0, false, false, false, false, 0, elem);
        if (/^dr/i.test(type)) {
            evt.dataTransfer = dataTransfer || createNewDataTransfer();
        }

        elem.dispatchEvent(evt);
        return evt;
    }

    function createNewDataTransfer() {
        var data = {};
        return {
            clearData: function(key) {
                if (key === undefined) {
                    data = {};
                } else {
                    delete data[key];
                }
            },
            getData: function(key) {
                return data[key];
            },
            setData: function(key, value) {
                data[key] = value;
            },
            setDragImage: function() {},
            dropEffect: 'none',
            files: [],
            items: [],
            types: [],
            // also effectAllowed
        };
    }
    
    function mouseMove() {
        var evt = document.createEvent('MouseEvents');
        evt.initMouseEvent('mousemove', true, true, window, 1, 10, 20, 200, 200, false, false, false, false, 0, null);
        if (/^dr/i.test('mousemove')) {
            evt.dataTransfer = dataTransfer || createNewDataTransfer();
        }
        document.body.dispatchEvent(evt);
    }
    
    function drop() {
        console.log('DROP');
        fireMouseEvent('mouseup', elemDrop); // not strictly necessary but I like the symmetry
    }
    
    fireMouseEvent('mousedown', elemDrag);
    mouseMove();
    drop();
    
    return true;
};

dragAndDrop(arguments[0], arguments[1], arguments[2])`;
