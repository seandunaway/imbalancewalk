export function create(options) {
    let p = {
        canvas: undefined,
        context: undefined,
        max: 75,
        min: 25,
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
            y: -100,
        },
        on_mouse: undefined,
        on_click: undefined,
        ...options
    }

    init(p)
    events(p)
    return p
}

function init(p) {
    if (!p.canvas) throw new Error('canvas')
    if (!p.context) p.context = p.canvas.getContext('2d')

    p.canvas.height = p.canvas.clientHeight * devicePixelRatio
    p.canvas.width = p.canvas.clientWidth * devicePixelRatio
    p.canvas.style.backgroundColor = p.color.background

    p.context.font = '48px monospace'
    p.context.strokeStyle = p.color.text_background
    p.context.lineWidth = '0.5px'
    p.context.setLineDash([20, 20])
    p.context.textBaseline = 'top'
}

function events(p) {
    let mouse_y_default = p.mouse.y
    addEventListener('mouseout', function (event) {
        p.mouse.y = mouse_y_default
    })
    addEventListener('mousemove', function (event) {
        if (p.on_mouse) p.on_mouse(p, event)
        p.mouse.y = calc_mouse_y(p, event)
    })
    addEventListener('mousedown', function (event) {
        if (p.on_click) p.on_click(p, event)
        if (!p.mouse.set_value) return

        let target = /** @type {HTMLCanvasElement} */ (event.target)
        if (p.canvas.id == target.id) p.value = calc_value_from_pixels(p)
    })
}

export function draw(p) {
    if (p.value > p.max) p.value = p.max
    if (p.value < p.min) p.value = p.min

    p.context.clearRect(0, 0, p.canvas.width, p.canvas.height)

    draw_value(p)
    draw_mouse_line(p)
    draw_mouse_label(p)
    draw_label(p)
}

function draw_value(p) {
    let y = p.flip ? 0 : p.canvas.height
    let h_sign = p.flip ? 1 : -1

    p.context.fillStyle = p.color.value
    p.context.fillRect(0, y, p.canvas.width, h_sign * calc_pixels_from_value(p))
}

function draw_label(p) {
    if (!p.label) return

    let h = parseInt(p.context.font.match(/\d+/)[0])
    let w = p.context.measureText(p.label).width
    let x = 0
    let y = p.flip ? 0 : p.canvas.height - h

    p.context.fillStyle = p.color.text_background
    p.context.fillRect(x, y, w, h)
    p.context.fillStyle = p.color.text
    p.context.fillText(p.label, x, y + 5)
}

function draw_mouse_line(p) {
    if (!p.mouse.line) return

    p.context.beginPath()
    p.context.moveTo(0, p.mouse.y)
    p.context.lineTo(p.canvas.width, p.mouse.y)
    p.context.stroke()
}

function draw_mouse_label(p) {
    if (!p.mouse.label) return

    let value = calc_value_from_pixels(p)
    let h = parseInt(p.context.font.match(/\d+/)[0])
    let w = p.context.measureText(value).width
    let x = p.canvas.width - w
    let y = p.mouse.y - (h / 2)

    p.context.fillStyle = p.color.text_background
    p.context.fillRect(x, y, w, h)
    p.context.fillStyle = p.color.text
    p.context.fillText(value, x, y + 5)
}

function calc_pixels_from_value(p) {
    let total = p.max - p.min
    let percent = (p.value - p.min) / total

    let pixels = p.canvas.height * percent
    return Math.round(pixels)
}

function calc_value_from_pixels(p) {
    let total = p.max - p.min
    let percent = p.mouse.y / p.canvas.height

    let value = p.flip ? p.min + (percent * total) : p.max - (percent * total)
    return Math.round(value)
}

function calc_mouse_y(p, event) {
    let rect = p.canvas.getBoundingClientRect()
    return (event.clientY - rect.top) / (rect.bottom - rect.top) * p.canvas.height
}
