import g from './globals.mjs'
import * as elements from './elements.mjs'
import * as levels from './levels.mjs'

let hide
let last_speed

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
                g.q.speed = last_speed ? last_speed : 1
            else {
                last_speed = g.q.speed
                g.q.speed = 0
            }
            break

        case 'Minus':
            g.rb.value = 0
            g.ib.value = 0
            g.is.value = 0
            g.rs.value = 0
            break

        case 'Equal':
            g.rb.value = 100
            g.ib.value = 100
            g.is.value = 100
            g.rs.value = 100
            break

        case 'Digit0':
            g.rb.value = 50
            g.ib.value = 50
            g.is.value = 50
            g.rs.value = 50
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

        case 'KeyC':
            let text = `${window.location.href.split('?')[0]}?`
            text += 'l=' + levels.string_from_values([g.rb.value, g.ib.value, g.is.value, g.rs.value])
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
