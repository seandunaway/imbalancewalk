import * as elements from './elements.mjs'
import * as powermeter from './powermeter.mjs'

let rs = powermeter.create({canvas: elements.canvas.rs})
let is = powermeter.create({canvas: elements.canvas.is})
let ib = powermeter.create({canvas: elements.canvas.ib})
let rb = powermeter.create({canvas: elements.canvas.rb})

powermeter.draw(rs)
powermeter.draw(is)
powermeter.draw(ib)
powermeter.draw(rb)
