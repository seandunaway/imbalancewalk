export function create(options) {
    let powermeter = {
        canvas: undefined,
        context: undefined,
        max: 60,
        min: 40,
        step: 1,
        value: 50,
        flip: false,
        label: undefined,
        color: {
            background: '#ffd6d6',
            value: '#e4ffd9',
            text: 'white',
            text_background: '#44475a',
        },
        mouse: {
            line: true,
            label: true,
            y: 0,
        },
        on_click: undefined,
        on_mouse: undefined,
        ...options
    }

    init(powermeter)
    events(powermeter)
    return powermeter
}

function init(powermeter) {
    if (!powermeter.canvas) throw new Error('canvas')
    if (!powermeter.context) powermeter.context = powermeter.canvas.getContext('2d')

    powermeter.canvas.height = powermeter.canvas.clientHeight * devicePixelRatio
    powermeter.canvas.width = powermeter.canvas.clientWidth * devicePixelRatio
    powermeter.canvas.style.backgroundColor = powermeter.color.background
    powermeter.context.fillStyle = powermeter.color.value
    powermeter.context.strokeStyle = powermeter.color.text_background
    powermeter.context.lineWidth = '0.5px'
    powermeter.context.setLineDash([20, 20])
}

function events(powermeter) {
    addEventListener('mousedown', function (event) {
        if (powermeter.on_click) powermeter.on_click()
    })
    addEventListener('mousemove', function (event) {
        powermeter.mouse.y = calc_mouse_y(powermeter, event)
        if (powermeter.on_mouse) powermeter.on_mouse()
    })
}

export function draw(powermeter) {
    powermeter.context.clearRect(0, 0, powermeter.canvas.width, powermeter.canvas.height)
    draw_value(powermeter)
    draw_mouse_line(powermeter)
}

function draw_value(powermeter) {
    let y = powermeter.flip ? 0 : powermeter.canvas.height
    let h_sign = powermeter.flip ? 1 : -1
    powermeter.context.fillRect(0, y, powermeter.canvas.width, h_sign * calc_y(powermeter))
}

function draw_mouse_line(powermeter) {
    if (!powermeter.mouse.line) return

    powermeter.context.beginPath()
    powermeter.context.moveTo(0, powermeter.mouse.y)
    powermeter.context.lineTo(powermeter.canvas.width, powermeter.mouse.y)
    powermeter.context.stroke()
}

function calc_y(powermeter) {
    if (powermeter.value > powermeter.max) powermeter.value = powermeter.max
    if (powermeter.value < powermeter.min) powermeter.value = powermeter.min

    let total = powermeter.max - powermeter.min
    let percent = (powermeter.value - powermeter.min) / total

    return Math.round(powermeter.canvas.height * percent)
}

function calc_mouse_y(powermeter, event) {
    let rect = powermeter.canvas.getBoundingClientRect()
    return (event.clientY - rect.top) / (rect.bottom - rect.top) * powermeter.canvas.height
}
