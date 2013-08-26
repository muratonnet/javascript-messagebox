javascript-messagebox
=====================

When developing a web page, time to time we needs a MessageBox to get confirmation from user, 
or to show some information or warning. 
Default alert function of browsers is not enough and it is not extendable. 
Because of that i have developed my MesasgeBox function with java script and jQuery. 
I hope it will be useful for you.
<br/>
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
