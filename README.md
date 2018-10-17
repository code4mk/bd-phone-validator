# `+880` bd-phone-validator
Bangladesh phone number validation

* [https://www.npmjs.com/package/@0devco/bd-phone-validator](https://www.npmjs.com/package/@0devco/bd-phone-validator)

# install

```bash
# npm
npm install @0devco/bd-phone-validator
# yarn
yarn add @0devco/bd-phone-validator
```

# use

```js
let bdPhone = require('@0devco/bd-phone-validator')
/* import */
import bdPhone from '@0devco/bd-phone-validator'

let check = bdPhone('01751211255')
console.log(check)
```

# 11 digit phn

* `01751200200` , `+8801751200200`

```js
bdPhone('01751200200')
```
<p><img src="https://user-images.githubusercontent.com/17185462/47107057-170e9c80-d26a-11e8-91c4-b83b3c65f95f.PNG"></p>


# less 11 digit

* `0175120020` , `017 512 00 20`

```js
bdPhone('0175120020')
```

<p><img src="https://user-images.githubusercontent.com/17185462/47107103-3dccd300-d26a-11e8-9406-648f3a3d5de8.PNG"></p>

# exceed (digit > 11)

* input => `013512002002` , `+88013512002002`, `+880 (135) 120-02002`

* output suggest => `+8801351200200`

```js
bdPhone('013512002002')
```
<p><img src="https://user-images.githubusercontent.com/17185462/47107133-56d58400-d26a-11e8-9d2b-d6f20e1f25a5.PNG"></p>

# invalid operator

* `012512002002`

```js
bdPhone('012512002002')
```

<p><img src="https://user-images.githubusercontent.com/17185462/47107175-6fde3500-d26a-11e8-8d6d-56bafed3bcbd.PNG"></p>

# demo

* [demo online](https://code4mk.org/bd-phone-validator)

<a href="https://twitter.com/0devco" target="_blank" > <p align="center"><img src="https://raw.githubusercontent.com/0devco/docs/master/.devco-images/logo-transparent.png"></p></a>
