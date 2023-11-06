import g from './globals.mjs'
import * as elements from './elements.mjs'
import * as templates from './templates.mjs'
import * as powermeter from './powermeter.mjs'
import * as quote from './quote.mjs'
import * as levels from './levels.mjs'

g.q = quote.create()
g.rs = powermeter.create({canvas: elements.canvas.rs, label: 'rs↓', flip: true})
g.is = powermeter.create({canvas: elements.canvas.is, label: 'is↓', flip: true})
g.ib = powermeter.create({canvas: elements.canvas.ib, label: 'ib↑'})
g.rb = powermeter.create({canvas: elements.canvas.rb, label: 'rb↑'})

async function frame_quote() {
    if (!elements.h1 || !elements.p) return

    quote.update(g.q)
    elements.h1.textContent = g.q.value.toFixed(2)
    elements.p.innerHTML = templates.p()

    await quote.delay(g.q)
    requestAnimationFrame(frame_quote)
}

function frame_powermeter() {
    g.q.rs = g.rs.value
    g.q.is = g.is.value
    g.q.ib = g.ib.value
    g.q.rb = g.rb.value
    powermeter.draw(g.rs)
    powermeter.draw(g.is)
    powermeter.draw(g.ib)
    powermeter.draw(g.rb)
    requestAnimationFrame(frame_powermeter)
}

frame_quote()
frame_powermeter()

await import('./keybindings.mjs')
await import('./parameters.mjs')
