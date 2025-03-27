
function squareDeclaration(width, height) {
    let square = width * height
    console.log(`${square}`)
}
squareDeclaration(2, 5)


const squareExpression = function (width, height) {
    return width*height
}
console.log(squareExpression(2, 5))


const squareArrow = (width, height) => {
    return width*height
}
console.log(squareArrow(2,5))