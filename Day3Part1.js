var entry;

entry = 347991;
//entry = 30;
perfectSquare = 0;

var original = entry;

SquareRt = 0;

var counter = 1;

var moveAmt = 1;

var centerPoint;

if (Number.isInteger(Math.sqrt(entry))) {
    console.log("This is a perfect square of " + Math.sqrt(entry) + " x " + Math.sqrt(entry));
} else {
    var orig = entry;
    while (!Number.isInteger(Math.sqrt(entry)) || (Math.sqrt(entry) % 2 === 0)) {
        entry++;
    }
    perfectSquare = entry;
    SquareRt = Math.sqrt(perfectSquare);
    console.log(orig + " wasn't a perfect square, the next largest one is " + perfectSquare + " with it's square = " + SquareRt);
}

console.log("The center point is (" + Math.ceil(SquareRt / 2) + ", " + Math.ceil(SquareRt / 2) +")");
centerPoint = Math.ceil(SquareRt / 2) - 1;


fillArray();

function fillArray() {
    // Initial placement of center point
    console.log("SquareRt = " + SquareRt);
    var array = new Array(SquareRt);
    for (var i = 0; i < SquareRt; i++) {
        array[i] = new Array(SquareRt);
    }

    var currentXPos = centerPoint;
    var currentYPos = centerPoint;

    console.log("centerPoint = " + centerPoint);

    array[currentXPos][currentYPos] = counter;
    counter++;
    
    while(counter < perfectSquare) {
        //console.log("Current position = [" + currentXPos + "," + currentYPos + "]");
        if (moveAmt %2 != 0) {
            for (var i = 1; i <= moveAmt; i++) {
                if (counter <= perfectSquare) {
                    array[currentXPos][currentYPos + 1] = counter;
                    if (counter == original) {
                        console.log("it's position is: [" + currentXPos + "," + (currentYPos+1) + "]");
                    }
                    counter++;
                    //console.log("For #1 and i = " + i);
                    
                    currentYPos += 1;

                   //console.log("Current position = [" + currentXPos + "," + currentYPos + "]");
                }
            }
            for (var i = 1; i <= moveAmt; i++) {
                if (counter <= perfectSquare)
                {
                    array[currentXPos - 1][currentYPos] = counter;
                    if (counter == original) {
                        console.log("it's position is: [" + (currentXPos-1) + "," + currentYPos + "]");
                    }
                    counter++;
                    //console.log("For #2 and i = " + i);
                    currentXPos -= 1;
                    //console.log("Current position = [" + currentXPos + "," + currentYPos + "]");
                }
            }

            moveAmt++;
        } else {
            for (var i = 1; i <= moveAmt; i++) {
                if (counter <= perfectSquare) {
                    array[currentXPos][currentYPos - 1] = counter;
                    if (counter == original) {
                        console.log("it's position is: [" + currentXPos + "," + (currentYPos-1) + "]");
                    }
                    counter++;
                    //console.log("For #3 and i = " + i);
                    currentYPos -= 1;
                    //console.log("Current position = [" + currentXPos + "," + currentYPos + "]");
                }
            }
            for (var i = 1; i <= moveAmt; i++) {
                if (counter <= perfectSquare) {
                    array[currentXPos + 1][currentYPos] = counter;
                    if (counter == original) {
                        console.log("it's position is: [" + (currentXPos+1) + "," + currentYPos + "]");
                    }
                    counter++;
                    //console.log("For #4 and i = " + i);
                    currentXPos += 1;
                    //console.log("Current position = [" + currentXPos + "," + currentYPos + "]");
                }
            }

            moveAmt++;
        }
    }
    // for (var i = 0; i < array.length; i++) {
    //     console.log(array[i]);
    // }

    findDistance(array, original);
}

//function
function findDistance(val, toFind) {
    var xCoord;
    var yCoord;

    for (var i = 0; i < val.length; i++) {
        for (var j = 0; j < val[i].length; j++) {
            if (val[i][j] == toFind) {
                console.log("The value to find is: " + original);
                console.log("Found it! At: [" + i + "," + j + "]");
                console.log("The value in [" + i + "," + j + "] is: " + val[i][j]);
                xCoord = i;
                yCoord = j;
            }
        }
    }

    var distance = Math.abs(xCoord - centerPoint) + Math.abs(yCoord - centerPoint);
    console.log("Distance: " + distance);

    distance = 0;
    distance += Math.abs(xCoord - centerPoint);
    distance += Math.abs(yCoord - centerPoint);
    console.log("New distance: " + distance);
}