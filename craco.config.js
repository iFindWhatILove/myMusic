const path = require("path")
const resolve = dir => path.resolve(__dirname,dir)

module.exports = {
    webpack: {
        alias: {
            '@': resolve('src'),
            'component': resolve('src/components'),
            'pages': resolve('src/pages'),
            'service': resolve('src/service'),
            'assets': resolve('src/assets')
        }
    }
}