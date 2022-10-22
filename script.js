let inputNumbers = document.getElementById("numbers")

function result(){

    let n = inputNumbers.value
    
    let ns = Math.round(Math.random() * n)
    document.getElementById("n").innerHTML = ns
}