export let h1 = document.querySelector('h1')

export let canvas = {}
for (let element of document.querySelectorAll('canvas')) {
    canvas[element.id] = element
}

export let p = document.querySelector('p')
export let a = document.querySelector('a')

export let not_h1 = /** @type {NodeListOf<HTMLElement>} */ (document.querySelectorAll('body :not(h1)'))
