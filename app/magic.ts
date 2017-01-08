/*1
var s1 = 'hello 1';
var s2 = 'hello 2';

function saySomething(mesasge: string = 'whats up') {
    console.log(mesasge);
}

saySomething(s1);
//saySomething(1234);
*/

class Greeter {

    saySomething(message) {
        return message + ' something';
    }
}

var greeter = new Greeter();
greeter.saySomething(123);
