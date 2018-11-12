###digital-signature-service

This is a simple express service that demonstrate a simple digital signature using the crypto (node.js) module

### Setup
1. Create private/public key pair (e.g. using openssl)

```shell
openssl genrsa -out rsa_1024_private.pem 1024
openssl rsa -pubout -in rsa_1024_private.pem -out rsa_1024_public.pem
```

will result in two files **rsa_1024_private.pem** and **rsa_1024_public.pem**

2. please create **keys** folder under the root folder with the following files:

```shell
keys
   |
    - rsa_1024_private.pem
   |
    - rsa_1024_public.pem
```


### Running

```js
npm start
```

### API
**sign**
    signing a message using the private key

```shell
    curl -d '{"message": "the fox xof eht"}' -H "Content-Type: application/json" -X POST localhost:3001/sign
```

**validate**
    validating if the message has been signed using the appropriate public key
    returns boolean (true if the signature is valid)

```shell
    curl -d '{"message": "the fox xof eht", "signature": "aaa"}' -H "Content-Type: application/json" -X POST localhost:3001/validate
```

### License
[MIT](https://github.com/adibiton/digitial-signature-service/blob/master/LICENSE)
