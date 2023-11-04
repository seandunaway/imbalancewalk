import * as elements from './elements.mjs'
import * as powermeter from './powermeter.mjs'
import * as quote from './quote.mjs'
import keys from './keys.mjs'
import params from './params.mjs'

let q = quote.create()

let rs = powermeter.create({canvas: elements.canvas.rs, label: 'rs↓', flip: true})
let is = powermeter.create({canvas: elements.canvas.is, label: 'is↓', flip: true})
let ib = powermeter.create({canvas: elements.canvas.ib, label: 'ib↑'})
let rb = powermeter.create({canvas: elements.canvas.rb, label: 'rb↑'})

keys({q, rs, is, ib, rb})

let p = params(['q', 'rs', 'is', 'ib', 'rb', 's'])
if (p.q) q.value = parseInt(p.q)
if (p.rs) rs.value = parseInt(p.rs)
if (p.is) is.value = parseInt(p.is)
if (p.ib) ib.value = parseInt(p.ib)
if (p.rb) rb.value = parseInt(p.rb)
if (p.s) q.speed = parseInt(p.s)

async function frame_quote() {
    if (!elements.h1 || !elements.p) return

    quote.update(q)
    elements.h1.textContent = q.value.toFixed(2)
    elements.p.innerHTML = `
        rb:<b>${rb.value}</b>%
        ib:<b>${ib.value}</b>%
        is:<b>${is.value}</b>%
        rs:<b>${rs.value}</b>%
        s:<b>${q.speed}</b>x
    `
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
