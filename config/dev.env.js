'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

const baseURL="http://localhost:8000";
module.exports = merge(prodEnv,baseURL, {
  NODE_ENV: '"development"'
})
