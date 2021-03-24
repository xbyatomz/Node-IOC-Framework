const Container = require('./Core/ioc')
const express = require('express')
const dotenv = require('dotenv')

class Bridge {
    constructor () {
        this.container = new Container()

        dotenv.config()
    }

    hydrateContainer (callback) {
        callback(this.container)
    }

    start () {
        new express().listen(8080, () => {
            console.info('Started server on 8080')
        })
    }
}

module.exports = Bridge