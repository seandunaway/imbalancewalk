export let h1 = document.querySelector('h1')

export let contexts = {}
export let canvases = document.querySelectorAll('canvas')
for (let canvas of canvases) {
    contexts[canvas.id] = canvas.getContext('2d')
}

export let p = document.querySelector('p')
