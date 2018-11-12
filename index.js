'use strict'
const fs = require('fs')
const path = require('path')

const express = require('express')
const bodyParser = require('body-parser')
const DigitalSignature = require('./src/digital-signature')

const PORT = process.env.port || 3001

const app = express()

const digitalSignature = new DigitalSignature({
    privateKey: fs.readFileSync(path.join(__dirname, './keys/rsa_1024_private.pem'), 'utf8'),
    publicKey: fs.readFileSync(path.join(__dirname, './keys/rsa_1024_public.pem'), 'utf8')
})

app.use(bodyParser.json())
app.post('/sign', (req, res) => {
    const message = req.body.message
    res
        .json({ message, signature: digitalSignature.sign(message), publicKey: this.publicKey})
        .status(200)
})

app.post('/validate', (req, res) => {
    const message = req.body.message
    const signature = req.body.signature
    const isSignatureValid = digitalSignature.validate(message, signature) ? 'valid' : 'not valid'

    res
        .json({status: `Signature is ${isSignatureValid}`})

})
app.listen(PORT, () => console.log(`App is running on port ${PORT}`))

