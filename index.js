function mindGame(number){
    if (typeof number !== 'number') {
        return "Provide valid Number";
    }
    let number1 = number;
    let numMultipication = number1 * 3;
    let numAddition = numMultipication + 10;
    let numDivision = numAddition / 2;
    let numTotal = numDivision - 5;
    return numTotal;
} 
// Description: This function operator performs some operation on single data value and produces a result.


function evenOdd(word){
    const myString = word;
    if (typeof myString !== 'string') {
        return "Provide String";
    }
    else if(myString.length % 2 == 0){
        return "even";
    }
    else{
        return "odd";
    }
}
// Description: This program checks whether the length in string variable is an even or an odd number.




function isLGSeven(number){
    let myNumber = number;
    if (typeof number !== 'number') {
        return "Provide valid Number";
    }
    else if(myNumber < 7){
        mySubmission = myNumber - 7;
        return mySubmission;
    }
    else{
        let numMultipication = myNumber*2;
        return numMultipication;
    }
}
// Description: Use the if else condition and find seven to a large number.



function findingBadData(array){
    if (Array.isArray(array)== false) {
        return "Provide valid numaric Array";
    }
    let myArray = array;
    let badData =0;
    for(let i= 0; i < myArray.length; i++){
        const element = myArray[i];
    if( element < 0){
        badData++;
        }
    }
    return badData;
}
// Description: Find a negative number in an array.



function gemsToDiamond(num1, num2, num3){
    const friendOneGem = num1*21;
    const friendTwoGem = num2*32;
    const friendTreeGem = num3*43;
    const totalDiamond = friendOneGem+friendTwoGem+friendTreeGem;
    let sum = 0;

    if (typeof num1 !== 'number'|| typeof num2 !== 'number' || typeof num3 !== 'number' ){
        return "Provide valid Number";
    }

    else if(totalDiamond >= 2000){
        sum = totalDiamond - 2000;
        return sum;
    }
    else{
        return totalDiamond;
    }   
}
// Description: convert gems to diamonds and all total number values.
