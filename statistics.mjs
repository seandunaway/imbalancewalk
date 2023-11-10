import g from './globals.mjs'

let quote

export let statistics = {
    up: 0,
    unchanged: 0,
    down: 0,
    total: 0,
}

export function update() {
    if (g.q.value > quote) statistics.up++
    if (g.q.value == quote) statistics.unchanged++
    if (g.q.value < quote) statistics.down++
    statistics.total++

    quote = g.q.value
}

export function log() {
    let up_p = statistics.up / statistics.total
    let unchanged_p = statistics.unchanged / statistics.total
    let down_p = statistics.down / statistics.total

    console.info(`up:${statistics.up}(${percent(up_p)}) unchanged:${statistics.unchanged}(${percent(unchanged_p)}) down:${statistics.down}(${percent(down_p)}) total:${statistics.total}`)
}

export function percent(number) {
    return (number * 100).toFixed(2) + '%'
}
