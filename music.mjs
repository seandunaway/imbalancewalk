import g from './globals.mjs'
import music from './music_data.mjs'

export let enabled
export let note = 36 // C4

let quote

export function update() {
    if (!enabled) return
    if (g.q.speed == 0) return
    if (g.q.value == quote) return

    if (g.q.value > quote) note++
    if (g.q.value < quote) note--

    if (note > music.length - 1) note = 0
    if (note < 0) note = music.length - 1

    play()

    quote = g.q.value
}

export function play() {
    let ctx = new AudioContext()

    let osc = ctx.createOscillator()
    let gain = ctx.createGain()
    osc.connect(gain).connect(ctx.destination)

    osc.frequency.value = music[note]
    gain.gain.setValueAtTime(0.25, ctx.currentTime)
    gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.10)

    osc.start()
    setTimeout(function() {ctx.close()}, 1000)
}

export function toggle() {
    if (!enabled) enabled = true
    else enabled = undefined
}
