export function create(options) {
    let quote = {
        value: 5000.00,
        delay: 100,
        tick: 0.25,
        rs: 50,
        is: 50,
        ib: 50,
        rb: 50,
        ...options,
    }
    return quote
}

export function update(quote) {
    // is there a lift by an initiative buyer?
    if (coinflip(quote.ib))
        // is it not held by a responsive seller?
        if (!coinflip(quote.rs))
            quote.value += quote.tick

    // is there a hit by an initiative seller?
    if (coinflip(quote.is))
        // is it not held by a responsive buyer?
        if (!coinflip(quote.rb))
            quote.value -= quote.tick
}

export async function delay(quote) {
    await new Promise(resolve => setTimeout(resolve, quote.delay))
}

export function coinflip(probability = 50) {
    return Math.random() < (probability / 100)
}
