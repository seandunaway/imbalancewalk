import g from './globals.mjs'
import levels from './levels_data.mjs'
import * as random from './random.mjs'

export let level = 0

export function next() {
    level++
    update(levels[level][0])
}

export function prev() {
    if (level > 0) level--
    else level = levels.length - 1
    update(levels[level][0])
}

export function random_data() {
    level = random.array_value(levels)
    update(level)
}

export function random_any() {
    let values = [random.number(10, 90), random.number(10, 90), random.number(10, 90), random.number(10, 90)]
    update(values)
}

export function values_from_string(string) {
    let values = []
    for (let char = 0; char < 4; char++) {
        switch (string[char]) {
            case '0': values.push(10); break
            case '2': values.push(90); break
            default: values.push(50); break
        }
    }
    return values
}

export function string_from_values(values) {
    let string = ''
    for (let i = 0; i < 4; i++) {
        if (values[i] < 50) string += '0'
        if (values[i] == 50) string += '1'
        if (values[i] > 50) string += '2'
    }
    return string
}

export function update(values_or_string) {
    let values = typeof values_or_string == 'string' ? values_from_string(values_or_string) : values_or_string
    g.rb.value = values[0]
    g.ib.value = values[1]
    g.is.value = values[2]
    g.rs.value = values[3]
}
