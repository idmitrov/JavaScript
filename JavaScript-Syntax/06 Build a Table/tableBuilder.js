/*
 Write a JavaScript function that takes as input an array of two numbers (start and end)
 and prints at the console a HTML table of 3 columns.

 ⦁  The first column should hold a number num, changing from start to end.
 ⦁  The second column should hold num*num.
 ⦁  The third column should hold "yes" if num is Fibonacci number or "no" otherwise.

 The table should have header cells titled "Num", "Square" and "Fib".

 Constraints
 ⦁	The input is passed to the first JavaScript function found in your code as array of 2 elements.
 ⦁	The numbers start and end are positive integers in the range [1…1 000 000] and start ≤ end.
 ⦁	Allowed working time for your program: 0.2 seconds.
 ⦁	Allowed memory: 16 MB.
*/

//CHECK IF THE NUMBER IS FIBONACCI
function isFibonacci(number) {
    var check1 = 5 * Math.pow(number, 2) + 4,
        check2 = 5 * Math.pow(number, 2) - 4;

    function isPerfectSquare(value) {
        return Math.sqrt(value) % 1 === 0;
    }

    var isCheck1PerfSquare = isPerfectSquare(check1),
        isCheck2PerfSquare = isPerfectSquare(check2);

    return isCheck1PerfSquare || isCheck2PerfSquare ? 'yes' : 'no';
}


//CREATE TABLE
function createTable(firstNumber, secondNumber) {
    var input = [firstNumber, secondNumber],
        start = input[0],
        end = input[1];

    //GENERATE TABLE ELEMENTS
    function tableElements(start, end) {
        //TABLE OPENING TAG
        console.log('<table>');
        //TALE THEAD
        console.log('<tr><th>Num</th><th>Square</th><th>Fib</th></tr>');
        //TABLE TBODY
        for (var i = start; i <= end; i++) {
            console.log('<tr><td>' + i  +'</td><td>' + Math.pow(i, 2) + '</td><td>' + isFibonacci(i) + '</td></tr>');
        }
        //TABLE CLOSING TAG
        console.log('</table>');
    }
    //RETURN TABLE ELEMENTS
    return tableElements(start, end);
}

createTable(2, 6);
createTable(55, 56);