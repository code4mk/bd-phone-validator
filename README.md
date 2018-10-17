# `+880` bd-phone-validator
:BD: Bangladesh phone operator validation [ BD sell-phone validation ] , gp , robi , banglalink , teletalk , airtel ...

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
<p><img src="https://user-images.githubusercontent.com/17185462/47054880-3eb42500-d1d6-11e8-9394-8bfc508a8eb9.PNG"></p>


# less 11 digit

* `0175120020` , `017 512 00 20`

```js
bdPhone('0175120020')
```

<p><img src="https://user-images.githubusercontent.com/17185462/47055226-10cfe000-d1d8-11e8-8762-44abda773d03.PNG"></p>

# exceed (digit > 11)

* input => `013512002002` , `+88013512002002`, `+880 (135) 120-02002`

* output suggest => `+8801351200200`

```js
bdPhone('013512002002')
```
<p><img src="https://user-images.githubusercontent.com/17185462/47054884-483d8d00-d1d6-11e8-8d09-c29e4ad40af1.PNG"></p>

# invalid operator

* `012512002002`

```js
bdPhone('012512002002')
```

<p><img src="https://user-images.githubusercontent.com/17185462/47054891-4ecc0480-d1d6-11e8-8ff3-cc64906ba2d5.PNG"></p>


<a href="https://twitter.com/0devco" target="_blank" ><p><img src="https://raw.githubusercontent.com/0devco/docs/master/.devco-images/logo-transparent.png"></p></a>
