export function coinflip(probability = 50) {
    return Math.random() < (probability / 100)
}

export function number(min = 0, max = 100) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
