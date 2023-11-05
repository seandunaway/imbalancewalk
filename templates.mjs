import g from './globals.mjs'

export function p() {
    return `
        rb·<b>${g.rb.value}</b>%
        ib·<b>${g.ib.value}</b>%
        is·<b>${g.is.value}</b>%
        rs·<b>${g.rs.value}</b>%
        s·<b>${g.q.speed}</b>x
    `
}
