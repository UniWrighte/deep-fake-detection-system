// pulled this code from https://nodejs.org/dist/latest-v12.x/docs/api/crypto.html
const crypto = require('crypto')
const fs = require('fs')
const hash = crypto.createHash('sha256')

// can be any file like example.png
const input = fs.createReadStream(process.env.FILE || './video.mpeg')
input.pipe(hash).pipe(process.stdout)