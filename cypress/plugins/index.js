/// <reference types="cypress" />

const readXlsx = require('./read-xlsx')

module.exports = (on, conifg) => {
on('task', {
    'readXlsx': readXlsx.read
})
}