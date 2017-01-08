/*1
var s1 = 'hello 1';
var s2 = 'hello 2';

function saySomething(mesasge: string = 'whats up') {
    console.log(mesasge);
}

saySomething(s1);
//saySomething(1234);
*/
var Greeter = (function () {
    function Greeter() {
    }
    Greeter.prototype.saySomething = function (message) {
        return message + ' something';
    };
    return Greeter;
}());
var greeter = new Greeter();
greeter.saySomething(123);
//# sourceMappingURL=magic.js.map