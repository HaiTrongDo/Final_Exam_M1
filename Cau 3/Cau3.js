let strEx31 = "Code"
let strEx32 = "Codegym"


function checkingStringOnOther(str1, str2) {
    let arrEx31 = str1.split("")
    let arrEx32 = str2.split("")
    let checkingFlag = false;
    let characterAtBothString = []


    //tìm kiếm str 1 có trong str 2 không, nếu có đẩy vào characterAtBothString.
    for (let i = 0; i < arrEx32.length; i++) {
        for (let j = 0; j < arrEx31.length; j++) {
            if (arrEx31[j] === arrEx32[i]) {
                characterAtBothString.push(arrEx31[j])
                arrEx32[i] = 0 //thay đổi giá trị để không tìm lại ký tự đó nữa
            }
        }
    }
    console.log(characterAtBothString);
    //kiểm tra các ký tự của characterAtBothString và str1 có trùng nhau không,
    // nếu trùng báo về true, nếu có bất cứ ký tự thừa nào thì sẽ báo về false.
    if (characterAtBothString.length <= arrEx31.length) {
        for (let i = 0; i < arrEx31.length; i++) {
            checkingFlag = characterAtBothString[i] === arrEx31[i];

        }
    } else {
        checkingFlag = false
    }
    return checkingFlag

}


console.log(checkingStringOnOther(strEx31, strEx32)); //true
console.log(checkingStringOnOther("gym", "Codegym Thanh Xuan")); //true

console.log(checkingStringOnOther("Codergym", "Codegym Thanh Xuan")); //false
console.log(checkingStringOnOther("Codee", "Codegym Thanh Xuan")); //false
console.log(checkingStringOnOther("Coder", "Codegym Thanh Xuan")); //false
console.log(checkingStringOnOther("Code1", "Codegym Thanh Xuan")); //false
console.log(checkingStringOnOther("Coders", "Codegym Thanh Xuan")); //false


// checkingStringOnOther("123", "456") //false
