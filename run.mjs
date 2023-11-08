import g from './globals.mjs'
import * as levels from './levels.mjs'

export let config = {
    repeat: undefined,
    script: /** @type {object[]} */ ([]),
    script_text: '',
    i: 0,
}

export function init(options) {
    Object.assign(config, options)

    let actions = config.script_text.split(',')
    for (let action of actions) {
        let [time_text, level_text, speed_text] = action.split(':')

        if (!level_text) {
            level_text = time_text
            time_text = '60'
        }
        if (!speed_text) speed_text = '1'

        let time = parseInt(time_text)
        let level = parse_level(level_text)
        let speed = parseFloat(speed_text)
        if (!time || !level || !speed) continue

        config.script.push({time, level, speed})
    }

    next()
}

export function parse_level(text) {
    let level

    let match_tertiary = text.match(/^[0-2]{1}[0-2]{1}[0-2]{1}[0-2]{1}$/)
    if (match_tertiary) level = match_tertiary[0]

    let match_array = text.match(/(\d{2})(\d{2})(\d{2})(\d{2})/)
    if (match_array) level = [parseInt(match_array[1]), parseInt(match_array[2]), parseInt(match_array[3]), parseInt(match_array[4])]

    return level
}

export function next() {
    if (config.i >= config.script.length) {
        if (config.repeat) {
            config.i = 0
            console.info('repeat!')
            return next()
        }
        console.info('done!')
        levels.update([50, 50, 50, 50])
        g.q.speed = 0
        return
    }

    console.info(`run: ${config.script[config.i].time} seconds of ${config.script[config.i].level} at speed ${config.script[config.i].speed}`)
    levels.update(config.script[config.i].level)
    g.q.speed = config.script[config.i].speed

    setTimeout(function () {
        config.i++
        next()
    }, config.script[config.i].time * 1000)
}
