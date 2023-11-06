import * as random from './random.mjs'

export function create(options) {
    let q = {
        value: 5000.00,
        tick: 0.25,
        delay: 200,
        speed: 1,
        rs: 50,
        is: 50,
        ib: 50,
        rb: 50,
        ...options,
    }
    return q
}

export function update(q) {
    if (q.speed == 0) return

    if (random.coinflip()) {
        buy(q)
        sell(q)
    } else {
        sell(q)
        buy(q)
    }
}

function buy(q) {
    // is there a lift by an initiative buyer?
    if (random.coinflip(q.ib))
        // is it not held by a responsive seller?
        if (!random.coinflip(q.rs))
            q.value += q.tick
}

function sell(q) {
    // is there a hit by an initiative seller?
    if (random.coinflip(q.is))
        // is it not held by a responsive buyer?
        if (!random.coinflip(q.rb))
            q.value -= q.tick
}

export async function delay(q) {
    await new Promise(resolve => setTimeout(resolve, random.number(20, q.delay) / q.speed))
}
