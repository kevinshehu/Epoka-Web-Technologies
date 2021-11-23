// Many Arguments Example
function sumAll() {
    var i, sum = 0;
    
    for (i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    
    return sum;
}
 
x = sumAll(1, 123, 500, 115, 44, 88);