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

            case 'ArrowUp':
                if (objects.q.speed >= 1) objects.q.speed++
                else objects.q.speed *= 2
                break
            case 'ArrowDown':
                if (objects.q.speed >= 2) objects.q.speed--
                else objects.q.speed /= 2
                break

            case 'Enter':
                objects.rb.value = 50
                objects.ib.value = 50
                objects.is.value = 50
                objects.rs.value = 50
                objects.q.speed = 1
                break
        }
    })
}
