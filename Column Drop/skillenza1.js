process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var A = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    A = input_stdin.split("\n");
    for(var k = 0;k<A[0];k++){
        check(A[(2*k)+1],A[(2*k)+2]);    
    }
    
});




function pair(chromo, query) {
    chromoArray = chromo.split(""); // string to array
    queryArray = query.split(""); // string to array
    var inOrder = true;
    //-- loop through queryArray
    for (var i = 0; i < queryArray.length; i++) {

        var qItem = queryArray[i]; //--query item picked

        if (chromoArray.indexOf(qItem) == -1) {
            return false;
        } else {
            chromoArray = chromoArray.splice((chromoArray.indexOf(qItem) + 1));
        }

    }
    return true;
}

function check(a,b) {
    if(pair(a,b)){
        console.log("YES");
        
    }else{
        console.log("NO");
    }
}