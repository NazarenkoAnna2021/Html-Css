const minimum = document.querySelector(".inputMin");
const maximum = document.querySelector(".inputMax");
const generateRandNum = document.querySelector(".generate");
const outputResalt = document.querySelector(".outputRes");
const resetGenerator = document.querySelector(".resetForm");

const usedNumber = [];

function initArrray(min, max) {
    for (let i = min; i <= max; i++) {
        usedNumber[i] = false;
    }
}

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

minimum.addEventListener("click", function () {
    initArrray(Math.ceil(minimum.value), Math.floor(maximum.value));
    
})

maximum.addEventListener("click", function () {
    initArrray(Math.ceil(minimum.value), Math.floor(maximum.value));
})


generateRandNum.addEventListener("click", function () {
    let isUsed = true;
   
    for (let i = Math.ceil(minimum.value); i <= Math.floor(maximum.value); i++)
            if (!usedNumber[i]) {
            isUsed = false;
            break;
    }
    if (!isUsed)
        while (true) {
            const random = getRandomNum(Math.ceil(minimum.value), Math.floor(maximum.value));
            if (!usedNumber[random]) {
                outputResalt.innerHTML = random;
                usedNumber[random] = true;
                break;
            }
        }
    else {
        generateRandNum.disabled = true;
        outputResalt.innerHTML = 'No more numbers in diapason';
    }
})

resetGenerator.addEventListener("click", function(){
    outputResalt.innerHTML = 'Redy to start';
    generateRandNum.disabled = false;
    initArrray(Math.ceil(minimum.value), Math.floor(maximum.value));

})

