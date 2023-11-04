export default function(objects) {
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

            case 'ArrowUp': objects.q.speed++; break
            case 'ArrowDown': if (objects.q.speed >= 1) objects.q.speed--; break

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
                break

            case 'KeyC':
                this.navigator.clipboard.writeText(
                    `${window.location.href}?` +
                    `rb=${objects.rb.value}&` +
                    `ib=${objects.ib.value}&` +
                    `is=${objects.is.value}&` +
                    `rs=${objects.rs.value}&` +
                    `s=${objects.q.speed}`
                )
                break
        }
    })
}
