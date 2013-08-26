javascript-messagebox
=====================

MessageBox for JavaScript : 
http://murataras.blogspot.com/2013/08/messagebox-with-javascript.html


Sample usage :

<pre>
function showOKMessage() {
    MessageBox.show('This is the sample message without title and default OK button.');
}
</pre>

<pre>
function showYesNoMessage() {
    var message = 'Are you sure you want to delete?';
    var buttons = [
        new MessageBoxButton('Yes', function () { alert('Yes button is clicked.') }),
        new MessageBoxButton('No', function () { alert('No button is clicked') })
    ];
    var title = 'Confirmation';
    MessageBox.show(message, buttons, title);
}
</pre>
