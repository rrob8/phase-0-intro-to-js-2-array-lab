// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat (newCat) {
    cats.push(newCat)
}

function destructivelyPrependCat (newCat) {
    cats.unshift(newCat)
}

function destructivelyRemoveLastCat() {
    cats.pop(-1);
}

function destructivelyRemoveFirstCat() {
    cats.shift(0)
}

function appendCat (newCat) {
    let newList = [...cats, newCat]
    return newList
}

function prependCat (newCat) {
    let newList = [newCat, ...cats]
    return newList
}

function removeLastCat () {
    let newList = cats.slice(0,-1)
    return newList
}

function removeFirstCat () {
    let newList = cats.slice(1)
    return newList
}


