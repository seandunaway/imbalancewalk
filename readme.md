# imbalancewalk

## shortcuts

### buyers and sellers
```
Q|A: rb +/- 5

W|S: ib +/- 5

E|D: is +/- 5

R|F: rs +/- 5

SHIFT modifier: +/- 1
```

### speed
```
T|⬆: speed +

G|⬇: speed -

P: pause
```

### presets
```
0: set all to 50

-: set all to 0

=: set all to 100

SPACE: reset quote

ESC: reset everything
```

### levels
```
N: next level

Shift+N: previous level

J: randomly jump to one of the standard 81 permutations

Shift+J: randomly jump to any possibility
```

### utility
```
H: toggle visibility

C: copy to clipboard
```

### help
```
?: readme
```

## parameters
```
&q= quote price

&rs= rs

&is= is

&ib= ib

&rb= rb

&s= speed

&h= visibility

&l= rs/is/ib/rb in tertiary notion
```

## tertiary notion
```
nnnn

1st n: rb

2nd n: ib

3nd n: is

4th n: rs

0: weak

1: average

2: strong

e.g.

1111: all average

2200: strong rb & ib, weak is & rs

0022: strong is & rs, weak rb & ib

2002: strong rb & rs, weak ib & is
```

## run scripts
```
&run= seconds:nnnn:speed

&r= repeat
```
https://seandunaway.github.io/imbalancewalk/?run=5:1211,5:2211,5:2210,5:2200,5:2210,5:2211,5:2221,5:2222,5:2122:2,5:1122:2,5:1022,10:0022&repeat=1
