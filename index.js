alert("JS is working")
let hit = document.getElementById("hits-btn")
let count = document.getElementById("count-el")
let save = document.getElementById("save-btn")
let left = document.getElementById("leftCounts")
let right = document.getElementById("rightCounts")
let fore = document.getElementById("foreCounts")
let back = document.getElementById("backCounts")
let reset = document.getElementById("reset-btn")
let saveCounter = 0
let counter = 0 
let totalScore = 0 
let TOTAL =document.getElementById("total")

function Hits (){
    counter += 1
    count.textContent = counter
}

function Save (){
    saveCounter+=1
        if (saveCounter===1)
        {left.textContent = counter
                counter = 0
                    count.textContent = counter

}
if (saveCounter===2)
        {right.textContent = counter
                counter = 0
                    count.textContent = counter

}
if(saveCounter===3) {
    fore.textContent = counter
    counter = 0 
    count.textContent = counter
}
if(saveCounter===4) {
    back.textContent = counter
    counter = 0 
    count.textContent = counter
    saveCounter = 0
}
totalscore()
}
function Reset(){
    counter = 0 
    saveCounter = 0
    count.textContent = counter
    left.textContent = counter
    right.textContent= counter
    fore.textContent = counter
    back.textContent = counter
    TOTAL.textContent = counter
    
}
function totalscore(){
     totalScore = Number(left.textContent)+
     Number(right.textContent)+
     Number(fore.textContent)
     +Number(back.textContent)
    TOTAL.textContent=totalScore
}
