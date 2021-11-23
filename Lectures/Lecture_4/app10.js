// Function Expressions
var x = function (a, b) {
    return a * b
};
console.log(x(2, 5));

// Self-Invoking Functions
(function () {
    var x = "Hello!!";      // I will invoke myself
    console.log(x);
})();

// Function Constructor
var myFunction = new Function("a", "b", "return a * b");
console.log(myFunction(2, 22));