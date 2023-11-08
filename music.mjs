import g from './globals.mjs'
import music from './music_data.mjs'
import * as random from './random.mjs'

export let enabled
export let note = 0

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

    for (let i = 1; i <= 6; i++) {
        let osc = ctx.createOscillator()
        let gain = ctx.createGain()
        osc.connect(gain).connect(ctx.destination)

        let note_wrapped = wrap(note + (i * 12))
        osc.frequency.value = music[note_wrapped]

        let gain_volume = random.array_gaussian(music, note_wrapped)
        gain.gain.setValueAtTime(gain_volume / 3, ctx.currentTime)
        gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.10)

        osc.start()
    }

    setTimeout(function() {ctx.close()}, 1000)
}

function wrap(i) {
    return i > music.length - 1 ? 0 + (i - (music.length - 1)) : i
}

export function toggle() {
    if (!enabled) enabled = true
    else enabled = undefined
}
