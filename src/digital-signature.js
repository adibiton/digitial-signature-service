'use strict'
const crypto = require('crypto')

class DigitalSignature {
    constructor({privateKey, publicKey, hashFunc = 'sha384', signatureFormat = 'hex'} = {}) {
        this.privateKey = privateKey
        this.publicKey = publicKey
        this.hashFunc = hashFunc
        this.signatureFormat = signatureFormat
    }

    sign(message) {
        const sign = crypto.createSign(this.hashFunc)
        sign.update(message)
        return sign.sign(this.privateKey, this.signatureFormat)
    }

    validate(message, signature) {
        console.log(message, signature)
        const verify = crypto.createVerify(this.hashFunc)
        verify.update(message)
        return verify.verify(this.publicKey, signature, this.signatureFormat)
    }
}

module.exports = DigitalSignature
