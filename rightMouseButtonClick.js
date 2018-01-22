'use strict';
/**
 * Originally from: https://stackoverflow.com/questions/7914684/trigger-right-click-using-pure-javascript,
 * http://jsfiddle.net/9gbd4/1/.
 * Modified by IgorSasovets (https://github.com/IgorSasovets) to simulate right mouse button click action
 * in Firefox browser (v.57.0.4).
 */

module.exports.mouseRightClick = `function mouseRight1Click() {
    const [x, y] = [400, 200]; //define place where context menu will be opened
    var element = document.getElementsByClassName('text-content')[0];//document.getElementsByTagName("h1")[0];
    element.onmousedown = function(ev){
        //Create event listener
        //if(ev.button == 2)  alert("Rightclicked!")
    }
    
    if (document.createEvent) {
        const rightClickDown = document.createEvent('MouseEvents');
        rightClickDown.initMouseEvent(
            'mousedown', 1, 1, window, 1, x, y, x, y, 0, 0, 0, 0, 2/*right button*/, null 
        );
        element.dispatchEvent(rightClickDown);
    } else if (document.createEventObject) { // for IE
        const rightClick = document.createEventObject();
        rightClick.type = 'click';
        rightClick.button = 2;
        element.fireEvent('onclick', rightClick);
    } else{
        alert('Not supported');
    }
   
    const rightClickUp = document.createEvent('MouseEvents');
    rightClickUp.initMouseEvent(
        'mouseup', 1, 1, window, 1, x, y, x, y, 0, 0, 0, 0, 2/*right button*/, element 
    );
    element.dispatchEvent(rightClickUp);
};

mouseRight1Click()`;

