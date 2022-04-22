let arr = [2, 3, 6, 7, 8, 5, 2, 5, 29, 30, 1, 2, 55, 3, 44, 23, 2]
let arr1 = [2, 3, 6, 7, 8, 5, 2, 5, 29, 1, 2, 55, 3, 44, 23, 2, 60, 70]
let arr2 = [2, 3, 6, 7, 8, 5,]

function checkingThirdLargestNum(arr) {
    let max = arr[0];
    let secondMax = arr[0];
    let ThirdMax = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    for (let j = 0; j < arr.length; j++) {
        if (secondMax < arr[j] && max > arr[j]) {
            secondMax = arr[j]
        }
    }

    for (let k = 0; k < arr.length; k++) {
        if (ThirdMax < arr[k] && secondMax > arr[k]) {
            ThirdMax = arr[k]
        }
    }
    // console.log(max);
    // console.log(secondMax);
    console.log(ThirdMax)
    return ThirdMax;
}

checkingThirdLargestNum(arr) // ThirdMax = 30
checkingThirdLargestNum(arr1) //ThirdMax = 55
checkingThirdLargestNum(arr2) //ThirdMax = 6

