/*
*
*   Requirements :
*       jquery.js
*
*   DOM Elements : They are created automatically on first call. Don't need to add page
*       <div id="messagebox-overlay">
*       </div>
*       <div id="messagebox">
*           <div class="messagebox-title"></div>
*           <div class="messagebox-message"></div>
*           <div class="messagebox-buttons"></div>
*       </div>
*
*/

// MessageBox object
var MessageBox = function () { };

// button of MessageBox
var MessageBoxButton = function (text, callbackFunction) {
    this.label = text;
    this.callbackFn = callbackFunction;
};

// show method
MessageBox.show = function (message, buttons, title) {
    // get message box element
    var $messageBox = this.getInstance();

    // set message    
    $("." + MessageBox.classes.message, $messageBox).html(message);

    // check buttons
    buttons = buttons || [new MessageBoxButton('OK')];
    // get buttons element
    $buttons = $("." + MessageBox.classes.buttons, $messageBox);
    // clear buttons
    $buttons.html("");
    // loop on buttons and add 
    for (var i in buttons) {
        // get button
        var button = buttons[i];
        // create button element
        var $button = $("<input/>").attr({
            "type": "button",
            "value": button.label
        }).addClass(MessageBox.classes.button);
        if (i > 0) {
            $button.css('margin-left', '10px');
        }
        // set callback function
        if (button.callbackFn) {
            $button.bind("click", button.callbackFn);
        }
        // add MessageBox.hide function
        $button.bind("click", function () { MessageBox.hide(); });
        // add to buttons
        $buttons.append($button);
    }

    // get title element
    var $title = $("." + MessageBox.classes.title, $messageBox);
    // check title
    if (title != undefined) {
        $title.html(title);
        $title.show();
    }
    else {
        $title.html('');
        $title.hide();
    }

    // center message box on overlay
    var $messageBoxOverlay = $("#messagebox-overlay");
    var preferedWidth = $messageBoxOverlay / 2;
    // check width of message box 
    if ($messageBox.width() > preferedWidth) {
        $messageBox.width(preferedWidth);
    }
    // calculate position
    var left = ($messageBoxOverlay.width() - $messageBox.width()) / 2;
    var top = ($messageBoxOverlay.height() - $messageBox.height()) / 2;
    // set position
    $messageBox.css({
        left: left,
        top: top
    });

    // show overlay
    $("#messagebox-overlay").css("display", "block");
    // show message box
    $messageBox.css("display", "block");
};

// hide method of MessageBox 
MessageBox.hide = function () {
    // get message box object
    var $messageBox = this.getInstance();
    // hide overlay
    $("#messagebox-overlay").css("display", "none");
    // hide message box
    $messageBox.css("display", "none");

};

// getInstance method of MessageBox 
MessageBox.getInstance = function () {
    // get message box div
    var $messageBox = $("#messagebox");

    // if not found
    if ($messageBox.length == 0) {
        // add overlay
        $('body').append('<div id="messagebox-overlay">' +
                         '</div>');

        // add message box
        $('body').append('<div id="messagebox">' +
                         '<div class="' + MessageBox.classes.title + '"></div>' +
                         '<div class="' + MessageBox.classes.message + '"></div>' +
                         '<div class="' + MessageBox.classes.buttons + '"></div>' +
                         '</div>');

        // get message box element
        $messageBox = $("#messagebox");
    }

    // return message box control
    return $messageBox;

};

MessageBox.classes = {
    title: "messagebox-title",
    message: "messagebox-message",
    buttons: "messagebox-buttons",
    button: "messagebox-button"
};





