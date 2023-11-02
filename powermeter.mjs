export function create(options) {
    let powermeter = {
        canvas: undefined,
        context: undefined,

        label: undefined,
        label_xy: [0, 0],

        max: 60,
        min: 40,
        step: 1,
        value: 50,
        flip: false,

        hover: {
            line: true,
            label: undefined,
        },

        color: {
            background: '#ffd6d6',
            value: '#e4ffd9',
            text: 'white',
            text_background: '#44475a',
        },

        on_click,
        on_hover,

        ...options
    }

    init(powermeter)
    return powermeter
}

export function init(powermeter) {
    if (!powermeter.canvas) throw new Error('canvas')
    if (!powermeter.context) powermeter.context = powermeter.canvas.getContext('2d')

    powermeter.canvas.height = powermeter.canvas.clientHeight * devicePixelRatio
    powermeter.canvas.width = powermeter.canvas.clientWidth * devicePixelRatio
    powermeter.canvas.style.backgroundColor = powermeter.color.background
}

export function draw(powermeter) {
    powermeter.context.fillStyle = powermeter.color.value
    powermeter.context.clearRect(0, 0, powermeter.canvas.width, powermeter.canvas.height)

    let y = powermeter.flip ? 0 : powermeter.canvas.height
    let h_sign = powermeter.flip ? 1 : -1
    powermeter.context.fillRect(0, y, powermeter.canvas.width, h_sign * calc_pixels(powermeter))
}

function calc_pixels(powermeter) {
    if (powermeter.value > powermeter.max) powermeter.value = powermeter.max
    if (powermeter.value < powermeter.min) powermeter.value = powermeter.min

    let total = powermeter.max - powermeter.min
    let percent = (powermeter.value - powermeter.min) / total
    let pixels = Math.round(powermeter.canvas.height * percent)

    return pixels
}

function on_click(powermeter) {}
function on_hover(powermeter) {}
