export let h1 = document.querySelector('h1')

export let canvas = {}
for (let element of document.querySelectorAll('canvas')) {
    canvas[element.id] = element
}

export let p = document.querySelector('p')
