export function create(options) {
    let powermeter = {
        canvas: undefined,
        context: undefined,

        max: 60,
        min: 40,
        step: 1,
        value: 50,
        flip: false,

        color: {
            background: '#ffd6d6',
            value: '#e4ffd9',
            text: 'white',
            text_background: '#44475a',
        },

        label: {
            text: undefined,
            x: 0,
            y: 0,
        },

        mouse: {
            line: true,
            label: undefined,
            x: 0,
            y: 0,
        },

        on_click: undefined,
        on_mouse: undefined,

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

    addEventListener('mousedown', function (event) {
        if (powermeter.on_click) powermeter.on_click()
    })
    addEventListener('mousemove', function (event) {
        let {x, y} = calc_mouse(powermeter, event)
        powermeter.mouse.x = x
        powermeter.mouse.y = y
        if (powermeter.on_mouse) powermeter.on_mouse()
    })
}

export function draw(powermeter) {
    powermeter.context.clearRect(0, 0, powermeter.canvas.width, powermeter.canvas.height)

    // flip: draw from bottom or top?
    let y = powermeter.flip ? 0 : powermeter.canvas.height
    let h_sign = powermeter.flip ? 1 : -1

    powermeter.context.fillStyle = powermeter.color.value
    powermeter.context.fillRect(0, y, powermeter.canvas.width, h_sign * calc_y(powermeter))
function calc_y(powermeter) {
    if (powermeter.value > powermeter.max) powermeter.value = powermeter.max
    if (powermeter.value < powermeter.min) powermeter.value = powermeter.min

    let total = powermeter.max - powermeter.min
    let percent = (powermeter.value - powermeter.min) / total

    return Math.round(powermeter.canvas.height * percent)
}

function calc_mouse(powermeter, event) {
    let rect = powermeter.canvas.getBoundingClientRect()
    return {
        x: (event.clientX - rect.left) / (rect.right - rect.left) * powermeter.canvas.width,
        y: (event.clientY - rect.top) / (rect.bottom - rect.top) * powermeter.canvas.height
    }
}
