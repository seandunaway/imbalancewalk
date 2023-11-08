export function coinflip(probability = 50) {
    return Math.random() < (probability / 100)
}

export function number(min = 0, max = 100) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export function array_value(array) {
    return array[number(0, array.length - 1)]
}

export function gaussian(array, i) {
    let a = 1.0
    let b = array.length / 2
    let c = array.length / 4
    let x = i
    return a * Math.exp(-(((x - b) / c)**2))
}
