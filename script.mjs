import * as elements from './elements.mjs'
import * as powermeter from './powermeter.mjs'
import * as quote from './quote.mjs'

let q = quote.create()

let rs = powermeter.create({canvas: elements.canvas.rs, label: 'rs↓', flip: true})
let is = powermeter.create({canvas: elements.canvas.is, label: 'is↓', flip: true})
let ib = powermeter.create({canvas: elements.canvas.ib, label: 'ib↑'})
let rb = powermeter.create({canvas: elements.canvas.rb, label: 'rb↑'})

async function frame_quote() {
    if (!elements.h1) return
    quote.update(q)
    elements.h1.textContent = q.value.toFixed(2)
    await quote.delay(q)
    requestAnimationFrame(frame_quote)
}

async function frame_powermeter() {
    powermeter.draw(rs)
    powermeter.draw(is)
    powermeter.draw(ib)
    powermeter.draw(rb)
    requestAnimationFrame(frame_powermeter)
}

frame_quote()
frame_powermeter()
