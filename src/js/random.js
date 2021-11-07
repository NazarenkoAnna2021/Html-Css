const usedNumber = [];

function initArrray(min, max) {
    for (let i = min; i <= max; i++) {
        usedNumber[i] = false;
    }
}

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

dom.minimum.addEventListener("click", function () {
    initArrray(Math.ceil(dom.minimum.value), Math.floor(dom.maximum.value));
    
})

dom.maximum.addEventListener("click", function () {
    initArrray(Math.ceil(dom.minimum.value), Math.floor(dom.maximum.value));
})


dom.generateRandNum.addEventListener("click", function () {
    let isUsed = true;
   
    for (let i = Math.ceil(dom.minimum.value); i <= Math.floor(dom.maximum.value); i++)
            if (!usedNumber[i]) {
            isUsed = false;
            break;
    }
    if (!isUsed)
        while (true) {
            const random = getRandomNum(Math.ceil(dom.minimum.value), Math.floor(dom.maximum.value));
            if (!usedNumber[random]) {
                dom.outputResalt.innerHTML = random;
                usedNumber[random] = true;
                break;
            }
        }
    else {
        dom.generateRandNum.disabled = true;
        dom.outputResalt.innerHTML = 'No more numbers in diapason';
    }
})

dom.resetGenerator.addEventListener("click", function(){
    dom.outputResalt.innerHTML = 'Redy to start';
    dom.generateRandNum.disabled = false;
    initArrray(Math.ceil(dom.minimum.value), Math.floor(dom.maximum.value));
})

