function checkOrder(available, ordered) {
if (ordered>available) {
    console.log("Your order is too large, we don’t have enough goods.")
    return
}
if (ordered==available) {
    console.log("Your order is empty")
    return
}
if (ordered<available) {
    console.log("Your order is accepted")
}
}

checkOrder(5,2)
