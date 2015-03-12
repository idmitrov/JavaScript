//CREATE TABLE
function createTable(input) {
        var start = Number(input[0]),
             end = Number(input[1]);

        console.log('<table>');
        console.log('<tr><th>Num</th><th>Square</th><th>Fib</th></tr>');
        for (var i = start; i <= end; i += 1) {
            console.log('<tr><td>' + i + '</td><td>' + Math.pow(i, 2) + '</td><td>' + isFibonacci(i) + '</td></tr>');
        }
        console.log('</table>');

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
}
