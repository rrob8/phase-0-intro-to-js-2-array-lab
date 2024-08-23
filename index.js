// Write your solution here!
let cats = ['Milo','Otis', 'Garfield']

function removeFirstCat () {
    let newCats = cats.slice(1)
    return newCats
}

function destructivelyAppendCat (newCat) {
    return cats.push(newCat)
}

function destructivelyPrependCat (newCat) {
    return cats.unshift(newCat)
}

function destructivelyRemoveLastCat () {
    return cats.pop()
}

function destructivelyRemoveFirstCat () {
    return cats.shift()
}

function appendCat (name) {
    let newCats = [...cats, name]

    return newCats
}

function prependCat(name) {
    return [name, ...cats]

}

function removeLastCat () {
    return cats.slice(0,-1)
}