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
        hover_line: true,
        hover_label: true,

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
    powermeter.canvas.style.backgroundColor = powermeter.color.background
}

export function draw(powermeter) {
    powermeter.context.fillStyle = powermeter.color.value
    powermeter.context.clearRect(0, 0, powermeter.canvas.width, powermeter.canvas.height)
    powermeter.context.fillRect(0, powermeter.canvas.height, powermeter.canvas.width, -(powermeter.canvas.height / 2))
}

export function on_click(powermeter) {

}

export function on_hover(powermeter) {

}
