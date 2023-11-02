export function create(options) {
    let powermeter = {
        canvas: undefined,
        context: undefined,
        max: 60,
        min: 40,
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
            set_value: true,
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

    powermeter.context.font = '50px monospace'
    powermeter.context.strokeStyle = powermeter.color.text_background
    powermeter.context.lineWidth = '0.5px'
    powermeter.context.setLineDash([20, 20])
}

function events(powermeter) {
    addEventListener('mousedown', function (event) {
        if (powermeter.on_click) powermeter.on_click(powermeter, event)
        if (!powermeter.mouse.set_value) return

        let target = /** @type {HTMLCanvasElement} */ (event.target)
        if (powermeter.canvas.id == target.id) powermeter.value = calc_value_from_pixels(powermeter)
    })
    addEventListener('mousemove', function (event) {
        if (powermeter.on_mouse) powermeter.on_mouse(powermeter, event)
        powermeter.mouse.y = calc_mouse_y(powermeter, event)
    })
}

export function draw(powermeter) {
    if (powermeter.value > powermeter.max) powermeter.value = powermeter.max
    if (powermeter.value < powermeter.min) powermeter.value = powermeter.min

    powermeter.context.clearRect(0, 0, powermeter.canvas.width, powermeter.canvas.height)

    draw_value(powermeter)
    draw_mouse_line(powermeter)
    draw_mouse_label(powermeter)
}

function draw_value(powermeter) {
    let y = powermeter.flip ? 0 : powermeter.canvas.height
    let h_sign = powermeter.flip ? 1 : -1

    powermeter.context.fillStyle = powermeter.color.value
    powermeter.context.fillRect(0, y, powermeter.canvas.width, h_sign * calc_pixels_from_value(powermeter))
}

function draw_mouse_line(powermeter) {
    if (!powermeter.mouse.line) return

    powermeter.context.beginPath()
    powermeter.context.moveTo(0, powermeter.mouse.y)
    powermeter.context.lineTo(powermeter.canvas.width, powermeter.mouse.y)
    powermeter.context.stroke()
}

function draw_mouse_label(powermeter) {
    if (!powermeter.mouse.label) return

    let h = 50
    let w = 100
    let x = powermeter.canvas.width - w
    let y = powermeter.mouse.y - (h / 2)

    powermeter.context.fillStyle = powermeter.color.text_background
    powermeter.context.fillRect(x, y, w, h)
    powermeter.context.fillStyle = powermeter.color.text
    powermeter.context.fillText(calc_value_from_pixels(powermeter), x + 5, y + h - 5)
}

function calc_pixels_from_value(powermeter) {
    let total = powermeter.max - powermeter.min
    let percent = (powermeter.value - powermeter.min) / total

    let pixels = powermeter.canvas.height * percent
    return Math.round(pixels)
}

function calc_value_from_pixels(powermeter) {
    let total = powermeter.max - powermeter.min
    let percent = powermeter.mouse.y / powermeter.canvas.height

    let value = powermeter.flip ? powermeter.min + (percent * total) : powermeter.max - (percent * total)
    return Math.round(value)
}

function calc_mouse_y(powermeter, event) {
    let rect = powermeter.canvas.getBoundingClientRect()
    return (event.clientY - rect.top) / (rect.bottom - rect.top) * powermeter.canvas.height
}
