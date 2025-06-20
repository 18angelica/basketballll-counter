let btnOne = document.getElementById("btnone")
let btnTwo = document.getElementById("btntwo")
let btnThree = document.getElementById("btnthree")
let scoreDiv =document.getElementById("scorediv")
let scoreDivs =document.getElementById("scoredivs")
let homeScore = 12
let guestScore = 5

function add1(){
    homeScore += 1
    scoreDiv.textContent = homeScore
}

function add2(){
    homeScore += 2
    scoreDiv.textContent = homeScore
}

function add3(){
    homeScore += 3
    scoreDiv.textContent = homeScore
}


function secAdd1(){
    guestScore += 1
    scoreDivs.textContent = guestScore
}

function secAdd2(){
    guestScore += 2
    scoreDivs.textContent = guestScore
}

function secAdd3(){
    guestScore += 3
    scoreDivs.textContent = guestScore
}
