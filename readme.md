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

M: toggle music

Shift+M: center music

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

## tertiary notation
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

## percent notation
```
rbibisrs

where rb, ib, is, rs are two digit numbers representing percentage
```

## run scripts
```
&run= seconds:nnnn:speed

&run= seconds:rbibisrs:speed

&r= repeat
```
https://seandunaway.github.io/imbalancewalk/?run=5:0000,5:2222,5:2020,5:0202&r=1

https://seandunaway.github.io/imbalancewalk/?run=5:10101010,5:90909090,5:66336633,5:33663366&r=1

## 81 permutations (3^4)

### average against weak

https://seandunaway.github.io/imbalancewalk/?l=1000

https://seandunaway.github.io/imbalancewalk/?l=0100

https://seandunaway.github.io/imbalancewalk/?l=0010

https://seandunaway.github.io/imbalancewalk/?l=0001

### strong against weak

https://seandunaway.github.io/imbalancewalk/?l=2000

https://seandunaway.github.io/imbalancewalk/?l=0200

https://seandunaway.github.io/imbalancewalk/?l=0020

https://seandunaway.github.io/imbalancewalk/?l=0002

### weak against average

https://seandunaway.github.io/imbalancewalk/?l=0111

https://seandunaway.github.io/imbalancewalk/?l=1011

https://seandunaway.github.io/imbalancewalk/?l=1101

https://seandunaway.github.io/imbalancewalk/?l=1110

### strong against average

https://seandunaway.github.io/imbalancewalk/?l=2111

https://seandunaway.github.io/imbalancewalk/?l=1211

https://seandunaway.github.io/imbalancewalk/?l=1121

https://seandunaway.github.io/imbalancewalk/?l=1112

### weak against strong

https://seandunaway.github.io/imbalancewalk/?l=0222

https://seandunaway.github.io/imbalancewalk/?l=2022

https://seandunaway.github.io/imbalancewalk/?l=2202

https://seandunaway.github.io/imbalancewalk/?l=2220

### average against strong

https://seandunaway.github.io/imbalancewalk/?l=1222

https://seandunaway.github.io/imbalancewalk/?l=2122

https://seandunaway.github.io/imbalancewalk/?l=2212

https://seandunaway.github.io/imbalancewalk/?l=2221

### buy imbalances
https://seandunaway.github.io/imbalancewalk/?l=1100

https://seandunaway.github.io/imbalancewalk/?l=1200

https://seandunaway.github.io/imbalancewalk/?l=2100

https://seandunaway.github.io/imbalancewalk/?l=2200

### sell imbalances

https://seandunaway.github.io/imbalancewalk/?l=0011

https://seandunaway.github.io/imbalancewalk/?l=0012

https://seandunaway.github.io/imbalancewalk/?l=0021

https://seandunaway.github.io/imbalancewalk/?l=0022

### initiative

https://seandunaway.github.io/imbalancewalk/?l=0110

https://seandunaway.github.io/imbalancewalk/?l=0120

https://seandunaway.github.io/imbalancewalk/?l=0210

https://seandunaway.github.io/imbalancewalk/?l=0220

### responsive

https://seandunaway.github.io/imbalancewalk/?l=1001

https://seandunaway.github.io/imbalancewalk/?l=1002

https://seandunaway.github.io/imbalancewalk/?l=2001

https://seandunaway.github.io/imbalancewalk/?l=2002


### initiative seller into responsive buyer

https://seandunaway.github.io/imbalancewalk/?l=1010

https://seandunaway.github.io/imbalancewalk/?l=1020

https://seandunaway.github.io/imbalancewalk/?l=2020

https://seandunaway.github.io/imbalancewalk/?l=2010


### initiative buyer into responsive seller

https://seandunaway.github.io/imbalancewalk/?l=0101

https://seandunaway.github.io/imbalancewalk/?l=0102

https://seandunaway.github.io/imbalancewalk/?l=0202

https://seandunaway.github.io/imbalancewalk/?l=0201

### buy imbalance (initiative)

https://seandunaway.github.io/imbalancewalk/?l=1210

https://seandunaway.github.io/imbalancewalk/?l=1220

https://seandunaway.github.io/imbalancewalk/?l=1201

https://seandunaway.github.io/imbalancewalk/?l=1202

### buy imbalance (responsive)

https://seandunaway.github.io/imbalancewalk/?l=2110

https://seandunaway.github.io/imbalancewalk/?l=2120

https://seandunaway.github.io/imbalancewalk/?l=2101

https://seandunaway.github.io/imbalancewalk/?l=2102

### buy imbalance (both)

https://seandunaway.github.io/imbalancewalk/?l=2210

https://seandunaway.github.io/imbalancewalk/?l=2201

https://seandunaway.github.io/imbalancewalk/?l=2211

### sell imbalance (initiative)

https://seandunaway.github.io/imbalancewalk/?l=0121

https://seandunaway.github.io/imbalancewalk/?l=0221

https://seandunaway.github.io/imbalancewalk/?l=1021

https://seandunaway.github.io/imbalancewalk/?l=2021

### sell imbalance (responsive)

https://seandunaway.github.io/imbalancewalk/?l=0112

https://seandunaway.github.io/imbalancewalk/?l=0212

https://seandunaway.github.io/imbalancewalk/?l=1012

https://seandunaway.github.io/imbalancewalk/?l=2012

### sell imbalance (both)

https://seandunaway.github.io/imbalancewalk/?l=0122

https://seandunaway.github.io/imbalancewalk/?l=1022

https://seandunaway.github.io/imbalancewalk/?l=1122

### theoretically balanced (initiative, responsive)

https://seandunaway.github.io/imbalancewalk/?l=0211

https://seandunaway.github.io/imbalancewalk/?l=1120

https://seandunaway.github.io/imbalancewalk/?l=1102

https://seandunaway.github.io/imbalancewalk/?l=2011

### theoretically balanced (up, down)

https://seandunaway.github.io/imbalancewalk/?l=1212

https://seandunaway.github.io/imbalancewalk/?l=2121

### theoretically balanced (initiative, responsive)

https://seandunaway.github.io/imbalancewalk/?l=1221

https://seandunaway.github.io/imbalancewalk/?l=2112

### all
https://seandunaway.github.io/imbalancewalk/?l=0000

https://seandunaway.github.io/imbalancewalk/?l=1111

https://seandunaway.github.io/imbalancewalk/?l=2222
