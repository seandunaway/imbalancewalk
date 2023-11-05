export default function(objects) {
    let search = new URLSearchParams(window.location.search)
    let params = {}
    for (let [key, value] of search) {
        params[key] = value
    }

    if (params.q) objects.q.value = parseInt(params.q)
    if (params.rs) objects.rs.value = parseInt(params.rs)
    if (params.is) objects.is.value = parseInt(params.is)
    if (params.ib) objects.ib.value = parseInt(params.ib)
    if (params.rb) objects.rb.value = parseInt(params.rb)

    if (params.s) objects.q.speed = parseFloat(params.s)
    if (params.h) dispatchEvent(new KeyboardEvent('keydown', {code: 'KeyH'}))

    return params
}
