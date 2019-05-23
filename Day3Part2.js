var entry;

entry = 347991;
//entry = 20;
perfectSquare = 0;

var original = entry;

SquareRt = 0;

var counter = 1;

var moveAmt = 1;

var centerPoint;

var cont = true;

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
    
    while(counter < perfectSquare && cont) {
        //console.log("Current position = [" + currentXPos + "," + currentYPos + "]");
        if (moveAmt %2 != 0) {
            for (var i = 1; i <= moveAmt; i++) {
                if (counter <= perfectSquare) {
                    var findsum = findSum(currentXPos, currentYPos + 1, array);
                    array[currentXPos][currentYPos + 1] = findsum;
                    if (counter == original) {
                        console.log("it's position is: [" + currentXPos + "," + (currentYPos+1) + "]");
                    }

                    if (findsum > original) {
                        console.log("It's greater! " + findsum);
                        cont = false;
                        break;
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
                    var findsum = findSum(currentXPos-1, currentYPos, array);
                    array[currentXPos - 1][currentYPos] = findsum;
                    if (counter == original) {
                        console.log("it's position is: [" + (currentXPos-1) + "," + currentYPos + "]");
                    }

                    if (findsum > original) {
                        console.log("It's greater! " + findsum);
                        cont = false;
                        break;
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
                if (counter <= perfectSquare && cont) {
                    var findsum = findSum(currentXPos, currentYPos -1, array);
                    array[currentXPos][currentYPos - 1] = findsum;
                    if (counter == original) {
                        console.log("it's position is: [" + currentXPos + "," + (currentYPos-1) + "]");
                    }

                    if (findsum > original) {
                        console.log("It's greater! " + findsum);
                        cont = false;
                        break;
                    }
                    counter++;
                    //console.log("For #3 and i = " + i);
                    currentYPos -= 1;
                    //console.log("Current position = [" + currentXPos + "," + currentYPos + "]");
                }
            }
            for (var i = 1; i <= moveAmt; i++) {
                if (counter <= perfectSquare && cont) {
                    var findsum = findSum(currentXPos + 1, currentYPos, array);
                    array[currentXPos + 1][currentYPos] = findsum;
                    if (counter == original) {
                        console.log("it's position is: [" + (currentXPos+1) + "," + currentYPos + "]");
                    }

                    if (findsum > original) {
                        console.log("It's greater! " + findsum);
                        cont = false;
                        break;
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
}

function findSum(x,y,array) {
    console.log("Start findSum for [" + x + "," + y + "]");
    var result = 0;
    var counter = 1;
    for (var i = -1; i <= 1; i++) {
        for (var j = -1; j <= 1; j++) {
            if (i !== 0 || j !== 0) {
                console.log('run ' + counter);
                counter++;
                if ((x+i) < array.length && (x+i) >= 0)
                {
                    if ((y+j) < array[x].length && (y+j) >= 0)
                    {
                        if(array[x+i][y+j]){
                            result += array[x+i][y+j];
                            //console.log("The value in [" + (x+i) + "," + (y+j) + "] is: " + array[x+i][y+j]);
                        } else {
                            //console.log("There is nothing in [" + (x+i) + "," + (y+j) + "]");
                        }
                    }
                }
            }
        }
    }

    return result;
}