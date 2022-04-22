let arrEx21 = [2, 3, 55, 3, 44, 23, 2]
let arrEx22 = [2, 3, 6, 7, 23, 2, 60, 70]
let arrEx23 = [2, 3, 6, 7, 8, 5, 23, 3]
let index =  1//prompt("Nhập index muốn xóa")

function tryRemoveFromArray(arrEx2, index) {
    if (index >= arrEx2.length) {
        alert("Index nhập vào không hợp lệ")
    } else {
        for (let i = index; i < arrEx2.length ; i++) {
            arrEx2[i] = arrEx2[i+1]
        }
        arrEx2.pop();
        console.log(arrEx2)
        return arrEx2
    }

}

tryRemoveFromArray(arrEx21, index)
tryRemoveFromArray(arrEx22, index)
tryRemoveFromArray(arrEx23, index)
