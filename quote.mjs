export function create(options) {
    let q = {
        value: 5000.00,
        delay: 100,
        tick: 0.25,
        rs: 50,
        is: 50,
        ib: 50,
        rb: 50,
        ...options,
    }
    return q
}

export function update(q) {
    // is there a lift by an initiative buyer?
    if (coinflip(q.ib))
        // is it not held by a responsive seller?
        if (!coinflip(q.rs))
            q.value += q.tick

    // is there a hit by an initiative seller?
    if (coinflip(q.is))
        // is it not held by a responsive buyer?
        if (!coinflip(q.rb))
            q.value -= q.tick
}

export async function delay(q) {
    await new Promise(resolve => setTimeout(resolve, q.delay))
}

export function coinflip(probability = 50) {
    return Math.random() < (probability / 100)
}
