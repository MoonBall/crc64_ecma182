/**
 * Kaidi ZHU <zhukaidi@souche.com> created at 2017-09-05 14:59:20 with ❤
 *
 * Copyright (c) 2017 Souche.com, all rights reserved.
 */
'use strict';

const fs = require('fs');

const binding = require('./build/Release/crc64_ecma182');

/**
 * Calculate the CRC64-ECMA182 of a buffer
 * @param {Buffer} buff the buffer to be calculated
 * @param {Buffer} [prev] the previous CRC64-ECMA182 result
 * @returns {Buffer} the result, if `prev` is passed then the `result` is `prev`
 */
exports.crc64 = function(buff, prev) {
    if(typeof buff === 'string') {
        buff = Buffer.from(buff);
    }

    if(!Buffer.isBuffer(buff) || (prev && !Buffer.isBuffer(prev))) {
        throw new Error('Arguments should be instance of Buffer.');
    }

    return binding.crc64.apply(null, prev ? [ buff, prev ] : [ buff ]);
}

/**
 * Calculate the CRC-64 of two sequential blocks
 * @param {Buffer} crc1 the CRC-64 of the first block
 * @param {Buffer} crc2 crc2 is the CRC-64 of the second block
 * @param {number} crc2BytesLen the length of the second block
 * @returns {Buffer} the CRC-64 of two sequential blocks
 */
exports.crc64Combine = function(crc1, crc2, crc2BytesLen) {
    if (!Buffer.isBuffer(crc1) || !Buffer.isBuffer(crc2)) {
        throw new Error('crc1 and crc2 arguments should be instance of Buffer.');
    }
    if (typeof crc2BytesLen !== 'number' || crc2BytesLen < 0) {
        throw new Error('crc2BytesLen argument should be a positive integer.');
    }
    return binding.crc64Combine.apply(null, [crc1, crc2, crc2BytesLen]);
}

/**
 * Convert a result buffer into a UInt64 string
 * @param {Buffer} buff the buffer to be converted
 * @returns {String} the result string
 */
exports.toUInt64String = function(buff) {
    if(!(buff instanceof Buffer) || (buff.length != 8)) {
        throw new Error('Argument should be an 8-length buffer.');
    }

    return binding.toUInt64String(buff);
};

/**
 * Calculate the CRC64-ECMA182 of a file
 * @param {String} filename the filename
 * @param {Boolean} [toString] whether the result should convert to string or not, default to `true`
 * @returns {Promise<String|Buffer>} the result string or buffer
 */
exports.crc64File = function(filename, toString= true) {
    return new Promise((resolve, reject) => {
        const stream = fs.createReadStream(filename);
        stream.on('error', function(err) {
            stream.destroy();
            reject(err)
        });

        let ret = Buffer.alloc(8);
        stream.on('data', function(chunk) {
            ret = exports.crc64(chunk, ret);
        });
        stream.on('end', function() {
            resolve(toString ? exports.toUInt64String(ret) : ret);
        });
    });
};