let first = document.getElementsByClassName("one")
let operator = document.getElementsByClassName("two")
let second = document.getElementsByClassName("three")
let answerBox = document.getElementsByClassName("five")
let submit = document.getElementsByClassName("button")
let questionAnswer = document.getElementsByClassName("answer")
let right = document.getElementsByClassName("right")
let wrong = document.getElementsByClassName("wrong")
let percent = document.getElementById("percent")
let correct = 0
let answer = []

for (i = 0; i < right.length; i++) {
    right[i].style.display = "none"
    wrong[i].style.display = "none"
}


const assignOperator = () => {
    let num =  Math.ceil(Math.random() * 9)
    switch (true) {
        case num == 1 || num == 2 || num == 3:
            operator[i].textContent = "+"
            break
        case num == 4 || num == 5 || num == 6:
            operator[i].textContent = "-"
            break
        case num == 7 || num == 8:
            operator[i].textContent = "x"
            break
        case num == 9:
            operator[i].textContent = "÷"
            break
    }
    return operator[i].textContent
}

const divideCheck = () => {
    let array = []
    let tempOne = Math.ceil(Math.random() * 90 + 10)
    for (x = 0; x < tempOne; x++) {
        if (tempOne % x == 0) {
            array.push(x)
        }
    }
    let tempTwo = array[Math.floor(Math.random() * array.length)]
   return [tempOne,tempTwo]
}

const questionGenerator = (input) => {
    let num = []
    switch (true) {
        case input == "+":
            num.push(Math.ceil(Math.random() * 100))
            num.push(Math.ceil(Math.random() * 100))
            first[i].textContent = num[0]
            second[i].textContent = num[1]
            answer.push(num[0]+num[1])
            break
        case input == "-":
            num.push(Math.ceil(Math.random() * 100))
            num.push(Math.ceil(Math.random() * 100))
            num.sort()
            first[i].textContent = num[1]
            second[i].textContent = num[0]
            answer.push(num[1]-num[0])
            break
        case input == "x":
            num.push(Math.ceil(Math.random() * 10))
            num.push(Math.ceil(Math.random() * 10))
            first[i].textContent = num[0]
            second[i].textContent = num[1]
            answer.push(num[1]*num[0])
            break
        case input == "÷":
            num = divideCheck()
            first[i].textContent = num[0]
            second[i].textContent = num[1]
            answer.push(num[0]/num[1])
            break
    }
}

const startUp = () => {
    for (i = 0; i < first.length; i++) {
        (questionGenerator(assignOperator()))
    }
    console.log(answer)
}

submit[0].addEventListener("click",() => {
    for (i = 0; i < first.length; i++) {
        if (questionAnswer[i].value == answer[i]) {
            questionAnswer[i].style.display = "none"
            right[i].style.display = ""
            correct++
        }else{
            questionAnswer[i].style.display = "none"
            wrong[i].style.display = ""
        }
    }
    percent.textContent = `${(correct * 5)}%`
})



window.onload = startUp