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

            case 'Escape':
                objects.rb.value = 50
                objects.ib.value = 50
                objects.is.value = 50
                objects.rs.value = 50
                objects.q.speed = 1
                break

            case 'KeyC':
                this.navigator.clipboard.writeText(
                    `${window.location.href}?` +
                    `rb=${objects.rb.value}&` +
                    `ib=${objects.ib.value}&` +
                    `is=${objects.is.value}&` +
                    `rs=${objects.rs.value}&` +
                    `speed=${objects.q.speed}&`
                )
                break
        }
    })
}
