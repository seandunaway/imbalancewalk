import g from './globals.mjs'

let search = new URLSearchParams(window.location.search)
let parameters = {}
for (let [key, value] of search) {
    parameters[key] = value
}

if (parameters.q) g.q.value = parseInt(parameters.q)
if (parameters.rs) g.rs.value = parseInt(parameters.rs)
if (parameters.is) g.is.value = parseInt(parameters.is)
if (parameters.ib) g.ib.value = parseInt(parameters.ib)
if (parameters.rb) g.rb.value = parseInt(parameters.rb)
if (parameters.s) g.q.speed = parseFloat(parameters.s)
if (parameters.h) dispatchEvent(new KeyboardEvent('keydown', {code: 'KeyH'}))

