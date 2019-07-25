'use strict'

const year = new Date().getFullYear()

function getBanner(pluginFilename) {
  return `/*!
  * Bootstrap Dialog v0.0.1 (https://iqbalfn.github.io/bootstrap-dialog/)
  * Copyright 2019 Iqbal Fauzi
  * Licensed under MIT (https://github.com/iqbalfn/bootstrap-dialog/blob/master/LICENSE)
  */`
}

module.exports = getBanner
