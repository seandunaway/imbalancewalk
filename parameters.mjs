import g from './globals.mjs'
import * as levels from './levels.mjs'

let search = new URLSearchParams(window.location.search)
let parameters = {}
for (let [key, value] of search) {
    parameters[key] = value
}

if (parameters.q) g.q.value = parseInt(parameters.q)

if (parameters.l) levels.update(parameters.l)
if (parameters.rs) g.rs.value = parseInt(parameters.rs)
if (parameters.is) g.is.value = parseInt(parameters.is)
if (parameters.ib) g.ib.value = parseInt(parameters.ib)
if (parameters.rb) g.rb.value = parseInt(parameters.rb)

if (parameters.s) g.q.speed = parseFloat(parameters.s)
if (parameters.h) dispatchEvent(new KeyboardEvent('keydown', {code: 'KeyH'}))

if (parameters.run) {
    let timeline = 0
    let actions = parameters.run.split(',')

    for (let action of actions) {
        let [time_text, level, speed_text] = action.split(':')
        let time = parseInt(time_text)
        let speed = parseFloat(speed_text)
        if (!time || !level) continue
        if (!speed) speed = 1

        setTimeout(function () {
            console.info(`run: ${time} seconds of ${level} at speed ${speed}`)
            levels.update(level)
            g.q.speed = speed
        }, timeline)

        timeline += time * 1000
    }

    // last
    setTimeout(function () {
        console.info('run: done!')
        levels.update([50, 50, 50, 50])
        g.q.speed = 0
    }, timeline)
}
