export default function(objects) {
    let speed

    addEventListener('keydown', function (event) {
        let i = event.shiftKey ? 1 : 5

        switch (event.code) {
            case 'KeyQ': objects.rb.value += i; break
            case 'KeyA': objects.rb.value -= i; break
            case 'KeyW': objects.ib.value += i; break
            case 'KeyS': objects.ib.value -= i; break
            case 'KeyE': objects.is.value -= i; break
            case 'KeyD': objects.is.value += i; break
            case 'KeyR': objects.rs.value -= i; break
            case 'KeyF': objects.rs.value += i; break

            case 'KeyT':
            case 'ArrowUp':
                if (objects.q.speed >= 1) objects.q.speed++
                else if (objects.q.speed == 0) objects.q.speed = 1
                else objects.q.speed *= 2
                break

            case 'KeyG':
            case 'ArrowDown':
                if (objects.q.speed >= 1) objects.q.speed--
                else if (objects.q.speed == 0) objects.q.speed = 0.50
                else objects.q.speed /= 2
                break

            case 'KeyP':
                if (!objects.q.speed)
                    objects.q.speed = speed ? speed : 1
                else {
                    speed = objects.q.speed
                    objects.q.speed = 0
                }
                break

            case 'Minus':
                objects.rb.value = 0
                objects.ib.value = 0
                objects.is.value = 0
                objects.rs.value = 0
                break

            case 'Equal':
                objects.rb.value = 100
                objects.ib.value = 100
                objects.is.value = 100
                objects.rs.value = 100
                break

            case 'Digit0':
                objects.rb.value = 50
                objects.ib.value = 50
                objects.is.value = 50
                objects.rs.value = 50
                break

            case 'Space':
                objects.q.value = 5000.00
                break

            case 'Escape':
                dispatchEvent(new KeyboardEvent('keydown', {code: 'Digit0'}))
                dispatchEvent(new KeyboardEvent('keydown', {code: 'Space'}))
                objects.q.speed = 1
                break

            case 'KeyH':
                let p = document.querySelector('p'); if (!p) break
                let elements = [p, objects.rb.canvas, objects.ib.canvas, objects.is.canvas, objects.rs.canvas]
                if (!objects.hidden) {
                    for (let element of elements)
                        element.style.visibility = 'hidden'
                    objects.hidden = true
                }
                else {
                    for (let element of elements)
                        element.style.visibility = 'visible'
                    objects.hidden = false;
                }
                break

            case 'KeyC':
                this.navigator.clipboard.writeText(
                    `${window.location.href.split('?')[0]}?` +
                    `rb=${objects.rb.value}&` +
                    `ib=${objects.ib.value}&` +
                    `is=${objects.is.value}&` +
                    `rs=${objects.rs.value}&` +
                    `s=${objects.q.speed}`
                )
                break

            case 'Slash':
                let a = document.querySelector('a')
                if (!a) break
                a.click()
                break
        }
    })
}
