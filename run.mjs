import g from './globals.mjs'
import * as levels from './levels.mjs'

export default function run(script, repeat = false) {
    let timeline = 0
    let actions = script.split(',')

    for (let action of actions) {
        let [time_text, level, speed_text] = action.split(':')
        let time = parseInt(time_text)
        let speed = parseFloat(speed_text)
        if (!time || !level) continue
        if (!speed) speed = 1.0

        let match = level.match(/(\d{2})(\d{2})(\d{2})(\d{2})/)
        if (match) level = [parseInt(match[1]), parseInt(match[2]), parseInt(match[3]), parseInt(match[4])]

        setTimeout(function () {
            console.info(`run: ${time} seconds of ${level} at speed ${speed}`)
            levels.update(level)
            g.q.speed = speed
        }, timeline)

        timeline += time * 1000
    }

    setTimeout(function () {
        console.info('run: done!')
        if (repeat) return run(script, repeat)

        levels.update([50, 50, 50, 50])
        g.q.speed = 0
    }, timeline)
}
