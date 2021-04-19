//1) //Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

//16  -->  1 + 6 = 7

const digital_root = (number) => {

    var number = 999,
        output = [],
        sNumber = number.toString();
    
    for (var i = 0, len = sNumber.length; i < len; i += 1) {
        output.push(+sNumber.charAt(i));
    }
    
    console.log(output);
    }

//2)


