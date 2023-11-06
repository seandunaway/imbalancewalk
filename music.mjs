import g from './globals.mjs'
import music from './music_data.mjs'

export let enabled

let quote
let note = 39 // C4

export function update() {
    if (!enabled) return
    if (g.q.speed == 0) return
    if (g.q.value == quote) return

    if (g.q.value > quote) note++
    if (g.q.value < quote) note--
    play()

    quote = g.q.value
}

export function play() {
    let ctx = new AudioContext()
    let osc = ctx.createOscillator()
    let gain = ctx.createGain()
    gain.gain.value = 0
    osc.connect(gain).connect(ctx.destination)
    osc.start()
    osc.frequency.value = note_from_music()
    gain.gain.linearRampToValueAtTime(0.33, ctx.currentTime + 0.10)
    gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.20)
    setTimeout(function() {ctx.close()}, 1000)
}

function note_from_music() {
    if (note > music.length - 1) note = 0
    if (note < 0) note = music.length - 1
    return music[note]
}

export function toggle() {
    if (!enabled) enabled = true
    else enabled = undefined
}
