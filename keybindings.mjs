import g from './globals.mjs'
import * as elements from './elements.mjs'
import * as levels from './levels.mjs'
import * as music from './music.mjs'

let hide
let speed

addEventListener('keydown', function (event) {
    let value = event.shiftKey ? 1 : 5

    switch (event.code) {
        case 'KeyQ': g.rb.value += value; break
        case 'KeyA': g.rb.value -= value; break
        case 'KeyW': g.ib.value += value; break
        case 'KeyS': g.ib.value -= value; break
        case 'KeyE': g.is.value -= value; break
        case 'KeyD': g.is.value += value; break
        case 'KeyR': g.rs.value -= value; break
        case 'KeyF': g.rs.value += value; break

        case 'KeyT':
        case 'ArrowUp':
            if (g.q.speed >= 1) g.q.speed++
            else if (g.q.speed == 0) g.q.speed = 1
            else g.q.speed *= 2
            break

        case 'KeyG':
        case 'ArrowDown':
            if (g.q.speed >= 1) g.q.speed--
            else if (g.q.speed == 0) g.q.speed = 0.50
            else g.q.speed /= 2
            break

        case 'KeyP':
            if (!g.q.speed)
                g.q.speed = speed ? speed : 1
            else {
                speed = g.q.speed
                g.q.speed = 0
            }
            break

        case 'Minus':
            levels.update([0, 0, 0, 0])
            break

        case 'Equal':
            levels.update([100, 100, 100, 100])
            break

        case 'Digit0':
            levels.update([50, 50, 50, 50])
            break

        case 'Space':
            g.q.value = 5000.00
            break

        case 'Escape':
            dispatchEvent(new KeyboardEvent('keydown', {code: 'Digit0'}))
            dispatchEvent(new KeyboardEvent('keydown', {code: 'Space'}))
            g.q.speed = 1
            break

        case 'KeyN':
            if (event.shiftKey) levels.prev()
            else levels.next()
            break

        case 'KeyJ':
            if (event.shiftKey) levels.random_any()
            else levels.random_data()
            break

        case 'KeyH':
            let elements_to_hide = [elements.p, elements.canvas.rb, elements.canvas.ib, elements.canvas.is, elements.canvas.rs]
            if (!hide) {
                for (let element of elements_to_hide)
                    element.style.visibility = 'hidden'
                hide = true
            }
            else {
                for (let element of elements_to_hide)
                    element.style.visibility = 'visible'
                hide = false;
            }
            break

        case 'KeyM':
            if (event.shiftKey) music.center()
            else music.toggle()
            break

        case 'KeyC':
            let text = `${window.location.href.split('?')[0]}?` +
            `rb=${g.rb.value}&` +
            `ib=${g.ib.value}&` +
            `is=${g.is.value}&` +
            `rs=${g.rs.value}`
            if (g.q.speed !== 1) text += `&s=${g.q.speed}`
            if (hide) text += '&h=1'
            this.navigator.clipboard.writeText(text)
            break

        case 'Slash':
            if (!elements.a) break;
            elements.a.click()
            break
    }
})
