const webdriverio = require('webdriverio')
const iosOptions = require('../helper/cap').iosOptions
const androidOptions = require('../helper/cap').androidOptions
const app = require('../helper/app').iosTestApp
describe('first demo', () => {
    let client
    iosOptions.desiredCapabilities.app = app
    before('init client ', () => {
        client = webdriverio.remote(androidOptions)
        client.init()
    })

    after('destory client', () => {
        client.end()
    })

    it('it is first test', () => {
        client
            .waitForExist("~TextField1", 5000)
            .element("~TextField1")
            .setValue("Hello World!")
            .getText("~TextField1", function (result) {
                assert.equal(result.value, "Hello World!");
            });
    })
})