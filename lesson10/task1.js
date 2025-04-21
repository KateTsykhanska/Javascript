function delayedLog(message, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(message);   
            resolve();              
        }, delay);
    });
}

// Виклик функції з .then
delayedLog("Привіт, світ!", 2000).then(() => {
    console.log("Повідомлення виведено."); 
});