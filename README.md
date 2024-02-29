# CRC64 ECMA182

[![Build Status](https://travis-ci.org/MoonBall/crc64_ecma182.svg?branch=master)](https://travis-ci.org/MoonBall/crc64_ecma182)
[![Coverage Status](https://img.shields.io/coveralls/MoonBall/crc64_ecma182.svg)](https://coveralls.io/r/MoonBall/crc64_ecma182)
[![crc64-ecma182](http://img.shields.io/npm/v/tos-crc64-js.svg)](https://www.npmjs.org/package/crc64-ecma182)
[![crc64-ecma182](http://img.shields.io/npm/dm/tos-crc64-js.svg)](https://www.npmjs.org/package/crc64-ecma182)
[![License](https://img.shields.io/npm/l/crc64-ecma182.svg?style=flat)](https://www.npmjs.org/package/crc64-ecma182)
[![Dependency Status](https://david-dm.org/MoonBall/crc64_ecma182.svg)](https://david-dm.org/MoonBall/crc64_ecma182)

[![NPM](https://nodei.co/npm/tos-crc64-js.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/crc64-ecma182/) [![NPM](https://nodei.co/npm-dl/crc64-ecma182.png?months=6&height=2)](https://nodei.co/npm/crc64-ecma182/)

> This package can be used as verify [downloading TOS](https://www.volcengine.com/docs/6349/136741) file and [uploading TOS](https://www.volcengine.com/docs/6349/136740#%E9%80%9A%E8%BF%87crc64) file.

## Installation

```sh
$ npm install --save tos-crc64-js
```

## Usage

### Calculate a Buffer

You can calculate the CRC64-ECMA182 value for a Node.js buffer or string:

```js
crc64.crc64(buff[, prev]);
```

+ Parameters:
    + `buff`: the buffer or string to be calculated;
    + [`prev`]: if exists, `prev` indicates the previous CRC64-ECMA182 value and the result of this function will strict equal to `prev`; (**optional**)
+ Returns: the result buffer that calculated.


```js
const crc64 = require("crc64-ecma182");
const ret1 = crc64.crc64("123456789");
const ret2 = crc64.crc64(new Buffer("123456789"));
const ret3 = crc64.crc64("123456789", Buffer.alloc(8));
const ret4 = crc64.crc64(new Buffer("123456789"), Buffer.alloc(8));

// ret1 ~ ret2 all equals to:
//
//   [ 0xfa, 0x39, 0x19, 0xdf, 0xbb, 0xc9, 0x5d, 0x99 ]
```

### Calculate a file

You can calculate the CRC64-ECMA182 value for a file:

```js
await crc64.crc64File(filename[, toString]);
```

+ Parameters:
    + `filename`: the file's name that to be calculated;
    + `toString`: to decide wether the result should be a buffer or a UInt64 string, default to `true`; (**optional**)
+ Returns: `Promise<string | Buffer>`

```js
const ret = await crc64.crc64File(path.join(__dirname, "pic.png"));
console.log(ret);

// a possible result:
//
//   5178350320981835788
```

### Convert Result Buffer to String

If you get a CRC64-ECMA182 result in Buffer, you could convert it to a UInt64 string via function:

```js
crc64.toUInt64String(buff);
```

+ Parameters:
    + `buff`: the CRC64-ECMA182 buffer result;
+ Returns: the UInt64 string.

```js
const ret1 = crc64.crc64("123456789");
const str = crc64.toUInt64String(ret1); // 11051210869376104954
```

## Contribution

You're welcome to make pull-requests.
