export default function(array) {
    let search = new URLSearchParams(window.location.search)

    let params = {}
    for (let item of array) {
        let value = search.get(item)
        if (value === null) continue

        params[item] = value
    }

    return params
}
