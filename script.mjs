import * as elements from './elements.mjs'
import * as powermeter from './powermeter.mjs'

let rs = powermeter.create({canvas: elements.canvas.rs, label: 'rs↓', flip: true})
let is = powermeter.create({canvas: elements.canvas.is, label: 'is↓', flip: true})
let ib = powermeter.create({canvas: elements.canvas.ib, label: 'ib↑'})
let rb = powermeter.create({canvas: elements.canvas.rb, label: 'rb↑'})

function frame() {
    powermeter.draw(rs)
    powermeter.draw(is)
    powermeter.draw(ib)
    powermeter.draw(rb)

    requestAnimationFrame(frame)
}
requestAnimationFrame(frame)
