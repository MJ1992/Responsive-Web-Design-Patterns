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


var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function(line){
    console.log(line);
})