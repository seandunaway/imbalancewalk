import g from './globals.mjs'
import music from './music_data.mjs'

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

    for (let i = 0; i < 7; i++) {
        let osc = ctx.createOscillator()
        let gain = ctx.createGain()
        osc.connect(gain).connect(ctx.destination)

        let note_wrap = wrap(note + (i * 12))
        osc.frequency.value = music[note_wrap]

        let gain_volume = gaussian(note_wrap)
        gain.gain.setValueAtTime(gain_volume, ctx.currentTime)
        gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.10)

        osc.start()
    }

    setTimeout(function() {ctx.close()}, 1000)
}

function wrap(i) {
    return i > music.length - 1 ? 0 + (i - (music.length - 1)) : i
}

function gaussian(i) {
    let a = 0.33
    let b = music.length / 3
    let c = music.length / 4
    let x = i
    return a * Math.exp(-(((x - b) / c)**2))
}

export function toggle() {
    if (!enabled) enabled = true
    else enabled = undefined
}
