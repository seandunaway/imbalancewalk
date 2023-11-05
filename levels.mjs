import levels from './levels.json' assert {type: 'json'}

export let level = 0

export function get() {
    return levels[level]
}

export function next() {
    level++
    return levels[level]
}

export function prev() {
    if (level > 0) level--
    else level = levels.length - 1
    return levels[level]
}

export function random() {
    level = Math.floor(Math.random() * levels.length - 1)
    return levels[level]
}

export function values_from_text(text) {
    let values = []
    for (let char = 0; char < 4; char++) {
        switch (text[char]) {
            case '0': values.push(25); break
            case '2': values.push(75); break
            default: values.push(50); break
        }
    }
    return values
}

export function text_from_values(values) {
    let text = ''
    for (let i = 0; i < 4; i++) {
        if (values[i] < 50) text += '0'
        if (values[i] == 50) text += '1'
        if (values[i] > 50) text += '2'
    }
    return text
}
