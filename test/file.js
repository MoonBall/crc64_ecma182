/**
 * Kaidi ZHU <zhukaidi@souche.com> created at 2017-09-05 17:48:20 with ❤
 *
 * Copyright (c) 2017 Souche.com, all rights reserved.
 */
'use strict';

const assert = require('assert');
const fs = require('fs');
const path = require('path');

require('should');

const crc64 = require('../');

describe('buffer test', function() {
    const retString = '5178350320981835788';
    const retBuffer = Buffer.from([ 0x0c, 0x00, 0xa7, 0x4c, 0x2e, 0x32, 0xdd, 0x47 ]);

    it('check from stream', function(done) {
        const stream = fs.createReadStream(path.join(__dirname, 'pic.png'));
        let ret = Buffer.alloc(8);
        stream.on('data', function(chunk) {
            ret = crc64.crc64(chunk, ret);
        });
        stream.on('end', function() {
            ret.should.be.instanceof(Buffer);
            crc64.toUInt64String(ret).should.be.equal(retString);
            ret.length.should.be.equal(retBuffer.length);
            ret.compare(retBuffer).should.be.equal(0);
            done();
        });
    });

    it('check crc64File()', async function() {
        const ret = await crc64.crc64File(path.join(__dirname, 'pic.png'));
        ret.should.be.equal(retString);
    });

    it('check crc64File() buffer', async function() {
        const ret = await crc64.crc64File(path.join(__dirname, 'pic.png'), false);
        ret.should.be.instanceof(Buffer);
        crc64.toUInt64String(ret).should.be.equal(retString);
        ret.length.should.be.equal(retBuffer.length);
        ret.compare(retBuffer).should.be.equal(0);
    });

    it('check crc64File() wrong file', async function() {
        try {
            await crc64.crc64File('asdflkj');
        } catch (err) {
            err.should.be.instanceof(Error);
            err.message.should.match(/no such file or directory/);
            return;
        }

        throw Error('should not go here');
    });
});
