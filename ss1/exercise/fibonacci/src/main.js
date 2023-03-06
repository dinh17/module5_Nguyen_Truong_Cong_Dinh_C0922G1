var fibonaci = function (num) {
    if (num <= 1) {
        return num;
    }
    return fibonaci(num - 1) + fibonaci(num - 2);
};
// @ts-ignore
var number = 15;
var sum = 0;
console.log("Dãy số fibonacci: ");
for (var i = 0; i < number; i++) {
    console.log(fibonaci(i));
    sum += fibonaci(i);
}
console.log("Tổng: " + sum);
