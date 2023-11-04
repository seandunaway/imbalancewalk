import * as elements from './elements.mjs'
import * as powermeter from './powermeter.mjs'
import * as quote from './quote.mjs'
import * as templates from './templates.mjs'
import keys from './keys.mjs'
import params from './params.mjs'

let q = quote.create()
let rs = powermeter.create({canvas: elements.canvas.rs, label: 'rs↓', flip: true})
let is = powermeter.create({canvas: elements.canvas.is, label: 'is↓', flip: true})
let ib = powermeter.create({canvas: elements.canvas.ib, label: 'ib↑'})
let rb = powermeter.create({canvas: elements.canvas.rb, label: 'rb↑'})

let objects = {q, rs, is, ib, rb, s: undefined}
keys(objects)
params(objects)

async function frame_quote() {
    if (!elements.h1 || !elements.p) return

    quote.update(q)
    elements.h1.textContent = q.value.toFixed(2)
    elements.p.innerHTML = templates.p(objects)

    await quote.delay(q)
    requestAnimationFrame(frame_quote)
}

function frame_powermeter() {
    q.rs = rs.value
    q.is = is.value
    q.ib = ib.value
    q.rb = rb.value
    powermeter.draw(rs)
    powermeter.draw(is)
    powermeter.draw(ib)
    powermeter.draw(rb)
    requestAnimationFrame(frame_powermeter)
}

frame_quote()
frame_powermeter()
