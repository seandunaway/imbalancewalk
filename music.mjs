import g from './globals.mjs'
import music from './music_data.mjs'

export let enabled
export let note
center()

let quote

export function update() {
    if (!enabled) return
    if (g.q.speed == 0) return
    if (g.q.value == quote) return
    if (g.q.value % 1 != 0) return

    if (g.q.value > quote) note++
    if (g.q.value < quote) note--

    if (note < 0 || note > music.length - 1) center()

    play()

    quote = g.q.value
}

export function play() {
    let ctx = new AudioContext()

    let osc = ctx.createOscillator()
    let gain = ctx.createGain()
    osc.connect(gain).connect(ctx.destination)

    osc.frequency.value = music[note]
    gain.gain.linearRampToValueAtTime(0.25, ctx.currentTime)
    gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.20)

    osc.start()
    setTimeout(function() {ctx.close()}, 1000)
}

export function center() {
    note = Math.round((music.length - 1) / 2)
}

export function toggle() {
    if (!enabled) enabled = true
    else enabled = undefined
}
