export default function(objects) {
    let search = new URLSearchParams(window.location.search)

    let params = {}
    for (let key in objects) {
        let param = search.get(key)
        if (param == null) continue

        let value = parseInt(param) ? parseInt(param) : param

        if (objects[key]?.value != undefined)
            objects[key].value = value
        else {
            let nested_keys = objects[key].split('.')
            let nested_value = objects
            for (let nested_key of nested_keys) {
                if (typeof nested_value[nested_key] == 'object')
                    nested_value = nested_value[nested_key]
                else
                    nested_value[nested_key] = value
            }
        }
    }
}
