function handleNum(num, handleEven, handleOdd) {
    if (num % 2 === 0) {
        handleEven(num)
    } else {
        handleOdd(num)
    }
}
function handleEven(num) {
    console.log("Number is even")
}
function handleOdd(num) {
    console.log("Number is odd")
}

handleNum(7, handleEven, handleOdd)
